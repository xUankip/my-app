import './App.css';
function withStyle(Component){
  return (props) => {
    const style = {
      color : "red",
      fontSize : "1cm",
      ...props.style,
    };
    return <Component{...props} style={style} />;
  }
}
const Text = ({style = {} }) => (
  <p style={{...style, fontFamily:"Inter"}}> MamaMia </p>
);
const StyleText = withStyle(Text);
function Welcome({name}) {
  return(
    <section>
      <h1>Hello , <span>{name}</span> 🥰</h1>
    </section>
  )
  }
function  App() {
  return(
    <div className='App'>
      <Welcome name="Xuaan" />
      <Text />
      <StyleText />
    </div>
  )
  }
// export default App;
// import './App.css';
// function UserProfile(){
//     return(
//       <div>
//       <h1>Xuaan</h1>
//   <img src="http://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
//    className="user-profile-pic" 
//    alt="Mark"/>
//       <h2>Hobbiees</h2>
//       <ul>
//           <li>Badminton</li>
//           <li>chess</li>
//           <li>Gaming</li>
//       </ul>
//       </div>
//     )
//   }
//   export default UserProfile;
function User(){
  const name= "Xuann"
  const pic = "http://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  return (
    <section>
      <img className='user-profile-pic' src={pic} alt={name} />
      <h2 className='user-name'>
        Hello, <span className='user-first-name'>{name}</span> 🥰
      </h2>
    </section>
  )
}
export default App;