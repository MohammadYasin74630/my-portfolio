import dbConnect from "@/lib/dbConnect";

export async function GET() {
    try {
        const tags = await dbConnect("blog")
            .aggregate([
                {
                    $match: {
                        isPublished: true,
                    },
                },
                {
                    $unwind: "$tags",
                },
                {
                    $group: {
                        _id: "$tags",
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
            tags.map(tag => tag._id)
        );

    } catch (error) {
        return Response.json(
            { error: error.message },
            { status: 500 }
        );
    }
}