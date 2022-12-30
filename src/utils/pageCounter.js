export const getPagesCount = (totalPages, limit) => {
    return Math.ceil(totalPages/limit)
}