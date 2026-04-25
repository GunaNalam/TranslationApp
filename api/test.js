// Simple test endpoint to verify API key and connectivity
export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    try {
        const apiKey = process.env.GEMINI_API_KEY;

        if (!apiKey) {
            return res.status(500).json({ 
                error: 'API key not configured',
                hasKey: false,
                envKeys: Object.keys(process.env).filter(k => !k.includes('VERCEL'))
            });
        }

        // Test the API key with a simple request
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${apiKey}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contents: [{
                        parts: [{
                            text: 'Say hello in one word'
                        }]
                    }]
                })
            }
        );

        if (!response.ok) {
            const error = await response.text();
            return res.status(response.status).json({ 
                error: 'API test failed',
                hasKey: true,
                keyLength: apiKey.length,
                keyPrefix: apiKey.substring(0, 10) + '...',
                apiError: error
            });
        }

        const data = await response.json();

        return res.status(200).json({ 
            success: true,
            message: 'API key is working correctly!',
            hasKey: true,
            keyLength: apiKey.length,
            keyPrefix: apiKey.substring(0, 10) + '...',
            testResponse: data.candidates[0].content.parts[0].text
        });

    } catch (error) {
        return res.status(500).json({ 
            error: 'Test failed',
            details: error.message,
            stack: error.stack
        });
    }
}
