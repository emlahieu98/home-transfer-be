exports.getItems = (model, page, page_size) => {
    const query = {}
    const options = {
        lean: true,
        sort: { createdAt: -1 },
        limit: page_size,
        offset: page,
        forceCountFn: true,
    };
    return new Promise((resolve, reject) => {
        model.paginate(query, options).then((result) => {
            resolve(result)
        })
            .catch((err) => {
                reject(err)
            })
    })
}
