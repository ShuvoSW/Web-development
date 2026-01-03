type IOptions = {
    page?: number | string;
    limit?: number | string;
    sortOrder?: string;
    sortBy?: string;
}
const paginationSortingHelper = (options: IOptions) => {
    // const page = Number
    console.log(options);
    return options
}

export default paginationSortingHelper;