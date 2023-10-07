import componentMapping from './components/Components';

// TODO: Needed to  fetched from server, since CORS isn't allowing so added as import
import './theme.css';
import theme from './theme.json';

function App() {

  return (
    <div>
      {theme.map((key, index) => {
        const Component = componentMapping[key.name];
        console.log(Component);
        return <Component key={index} id={key?.data?.id} className={key?.data?.className}/>
      })}
    </div>
  );
}

export default App;
