import './App.css'

function MyButton(){
    return(
        <button>Soy un boton</button>
    );
}

function App(){
    return(
        <div>
            <h1>Bienvenidos a mi app</h1>
            <MyButton/>
        </div>
    );
}

export default App;