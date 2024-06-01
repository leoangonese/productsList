import { HomeType } from "../types"

const Home: React.FC<HomeType> = ({ products }) => {
    return (
        <main className="w-full min-h-screen">
            <table className="w-full flex flex-col text-center">
                <h1 className="font-bold text-3xl py-3 text-pink-500">Loja de Iphones da Laura</h1>
                <thead className="w-full bg-pink-500">
                    <tr className="w-full flex items-center justify-between px-10 py-5">
                        {["Nome", "Descrição", "Preço", "Imagem"].map((item: string, index: number) => (
                            <th className="font-normal text-2xl" key={index}>{item}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className="w-full">
                    {products.map((item: any, index: number) => (
                        <tr className={`w-full flex items-center justify-between py-5 px-10 ${index % 2 === 0 ? 'bg-white' : 'bg-pink-300'}`} key={index}>
                            <td>{item.name}</td>
                            <td>{item.describe}</td>
                            <td>{item.price}</td>
                            <td><img className="w-20" src={item.image} alt="" /></td>
                        </tr>
                    ))}
                    <tr>
                    </tr>
                </tbody>
            </table>
        </main>
    )

}
export default Home