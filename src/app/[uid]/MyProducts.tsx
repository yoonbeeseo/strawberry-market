import { useModal } from "@/components";

interface Props {
  queryKey: any[];
  data: Product[];
}
const MyProducts = ({ data, queryKey }: Props) => {
  const ADDPRODUCT = useModal();
  return (
    <>
      {data.length === 0 ? (
        <div className="flex-1 justify-center items-center">
          <button className="border" onClick={ADDPRODUCT.open}>
            등록된 상품이 없습니다. 추가해주세요.
          </button>
          <ADDPRODUCT.Modal state={ADDPRODUCT.state}>
            <h1>상품 등록</h1>
            <p>상품을 등록해주세요.</p>
          </ADDPRODUCT.Modal>
        </div>
      ) : (
        <ul>
          {data.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default MyProducts;
