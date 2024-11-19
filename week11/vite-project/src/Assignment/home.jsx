import { RecoilRoot, selector, useRecoilValue, useSetRecoilState } from 'recoil';
import { atom } from 'recoil';
const items = atom({
    key: 'gadget',
    default: [
        {
            id: 1,
            gadget: 'schoolbag',
            price: 1000,
            stock: true,
            description: "This is a durable and spacious schoolbag, perfect for carrying books and essentials."
        },
        {
            id: 2,
            gadget: 'laptop',
            price: 50000,
            stock: true,
            description: "A high-performance laptop, lightweight and portable, perfect for work on the go."
        },
        {
            id: 3,
            gadget: 'phone',
            price: 20000,
            stock: false,
            description: "A powerful smartphone with a sleek design, ideal for everyday use."
        }
    ]
});
const count=atom({
    key:'count',
    default:[1,1,1]
})
// const addcart=selector({
//     key:'addcart',
//     get:function({get}){
//         const button=document.getElementById()
//     }
// })
function Cart() {
    return (
        <RecoilRoot>
            <Features />
        </RecoilRoot>
    );
}
function Features(){
    return(
        <>
        <Increase/>
        <Display/>
        </>
    )
}
function Increase(){
    const setcount=useSetRecoilState(count);
    console.log('Increase called');
    return(
        <p>same5</p>
    )
}
function Display() {
    const sample = useRecoilValue(items);  
    const number=useRecoilValue(count); 
    const setcount=useSetRecoilState(count);
    console.log(setcount);
    const styles = {
        container: {
            maxWidth: '600px',
            margin: '0 auto',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column'
        },
        itemCard: {
            backgroundColor: '#fff',
            border: '1px solid #ddd',
            borderRadius: '5px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            padding: '15px',
            marginBottom: '10px'
        },
        title: { fontSize: '1.5rem', fontWeight: 'bold', color: '#333' },
        price: { color: '#007bff', fontSize: '1.2rem' },
        description: { color: '#555', margin: '5px 0' },
        stock: (available) => ({
            color: available ? '#28a745' : '#dc3545',
            fontStyle: 'italic',
            fontWeight: 'bold'
        })
    };
    return (
        <div style={styles.container}>
            {sample.map((item,index) => (
                <div key={item.id} style={styles.itemCard}>
                    <h2 style={styles.title}>Gadget: {item.gadget}</h2>
                    <h2 style={styles.price}>Price: ₹{item.price}</h2>
                    <p style={styles.description}>{item.description}</p>
                    <p style={styles.stock(item.stock)}>Stock: {item.stock ? 'available' : 'not available'}</p>
                    <button value={item.price} onClick={function(){setcount((index)=>number[index]+1) }}>{number[index]}</button>
                </div>
            ))}
        </div>
    );
}
export default Cart;