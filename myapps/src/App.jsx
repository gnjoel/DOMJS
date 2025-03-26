
import './App.css';
import Message from './Message';
import Square from './Square';
import MyButton from './MyButton';
import LikeButton from './LikeButton';
import Cart from './Cart';
import Countclick from './Countclick';
function App(){
  return(
      <>
      <Countclick/>
      <Message></Message>
      <Square></Square>
      <MyButton/>
<Cart/>
<LikeButton/>
      </>
    )
  
}
export default App;