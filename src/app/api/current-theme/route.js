import dbConnect from "@/lib/dbConnect";

export async function GET(req) {

    let theme = await dbConnect("currentTheme").findOne();

    try {

        if (!theme) {
            theme = { themeName: "light" };
            await dbConnect("currentTheme").insertOne({ themeName: theme.themeName })
        }

        return new Response(JSON.stringify({ "themeName": theme.themeName }), { status: 200 });

    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}

export async function PUT(req) {

    const allThemes = ["light", "wireframe", "cmyk", "lofi", "silk", "cupcake", "winter", "nord", "pastel", "bumblebee", "corporate", "acid", "emerald", "garden", "fantasy", "autumn", "lemonade", "retro", "caramellatte", "cyberpunk", "valentine", "synthwave", "aqua", "halloween", "forest", "black", "luxury", "business", "dim", "dracula", "dark", "sunset", "night", "coffee", "abyss"];

    const { themeName } = await req.json();

    if (!themeName) {
        return new Response(JSON.stringify({ error: 'themeName is required' }), { status: 400 });
    }

    if (!allThemes.find(val => val === themeName)) {
        return new Response(JSON.stringify({ error: "only valid theme name are allowed" }), { status: 500 });
    }

    const theme = await dbConnect("currentTheme").findOne()

    if (!theme) {
        await dbConnect("currentTheme").insertOne({ themeName })

        return new Response(JSON.stringify({ "themeName": themeName }), { status: 200 });
    }

    try {

        let res = await dbConnect("currentTheme").updateOne(
            { themeName: { $exists: true } },
            {
                $set: {
                    themeName
                }
            }
        )

        if (res.acknowledged) {
            return new Response(JSON.stringify({ "themeName": themeName }), { status: 200 });
        }

        return new Response(JSON.stringify({ "themeName": " " }), { status: 200 });

    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}