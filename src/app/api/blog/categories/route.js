import dbConnect from "@/lib/dbConnect";

export async function GET() {
    try {
        const categories = await dbConnect("blog")
            .aggregate([
                {
                    $match: {
                        isPublished: true,
                    },
                },
                {
                    $group: {
                        _id: "$category",
                    },
                },
                {
                    $sort: {
                        _id: 1,
                    },
                },
            ])
            .toArray();

        return Response.json(
            categories.map(category => category._id)
        );

    } catch (error) {
        return Response.json(
            { error: error.message },
            { status: 500 }
        );
    }
}