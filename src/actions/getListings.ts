import prismadb from "@/lib/prismadb"

const getListings = async() => {
    try {
        const listings = await prismadb.listing.findMany({
            orderBy: {
                createdAt:"desc"
            }
        })
        return listings
    } catch (error:any) {
        throw new Error(error)
    }
}   

export default getListings