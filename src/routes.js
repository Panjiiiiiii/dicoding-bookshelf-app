const {addBook, findBook, getAllBook, deleteBook, updateBook} = require("./handler")

const routes = [
    {
        method : 'POST',
        path : '/books',
        handler : addBook
    },
    {
        method : 'GET',
        path : '/books',
        handler : getAllBook
    },
    {
        method : 'GET',
        path : '/books/{bookId}',
        handler : findBook
    },
    {
        method : 'PUT',
        path : '/books/{bookId}',
        handler : updateBook
    },
    {
        method : 'DELETE',
        path : '/books/{bookId}',
        handler : deleteBook
    },
]

module.exports = routes