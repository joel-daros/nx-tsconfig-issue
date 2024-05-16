export function Products() {
  const myArr = [1, 2, 3];
  const index: number = 0;
  const value = myArr[index];
  return (
    <div>
      {/* I don't need the optional operator because this project has noUncheckedIndexedAccess = false */}
      <h1>{value.toString()}</h1>
    </div>
  );
}

export default Products;
