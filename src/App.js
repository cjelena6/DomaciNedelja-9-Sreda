

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getAllProducts().then(res => {
      setProducts(res.data)
    })
  }, [])

  return (
    <div className="chat">
      <Form setProducts={setProducts} />
      <Products products={Products} />
    </div>
  )}

export default App;
