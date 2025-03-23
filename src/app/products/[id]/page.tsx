export default  async function Product({params}: {params: {id:string}}) {
    const id = await params.id;
    return (
        <h1>Product {id}</h1>
    )
}