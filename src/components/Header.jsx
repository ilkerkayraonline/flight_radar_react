import { useSelector } from "react-redux"


const Header = () => {

 const state = useSelector((store) => store)

 console.log(state);

  return (
    <header>
        <div>
            <img src="/plane1.png" />
            <h3>Uçuş Radarı</h3>
        </div>


        <p>
         {
          state.isLoading ? "Uçuşlar Hesaplanıyor..."
          : state.isError ? "Bir Sorun Oluştu"
          : state.flights.length + " Uçuş Bulundu"
         } 
        </p>
    </header>
  )
}

export default Header