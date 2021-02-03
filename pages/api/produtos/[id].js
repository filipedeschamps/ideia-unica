export default function Produtos(request, response) {
    console.log(request.query.id);
    response.json({id: request.query.id});
}