export const getStaticProps = async()=>{

  const res = await fetch('https://jsonplaceholder.typicode.com/users');
   const data = await res.json()


   return {
    props:{
        ninjas:data
    }
   }
}


const Ninjas = ({ninjas}) => {
    return ( <div>
        <h1>All Ninjas</h1>
    </div> );
}
 
export default Ninjas;