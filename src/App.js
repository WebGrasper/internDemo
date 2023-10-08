import componentMapping from './components/Components';
import { useEffect, useState } from 'react';
import useOctokit from './utils/useOctokit';

function App() {
  const [theme, setTheme] = useState([]);
  const [code, updateCode] = useOctokit("themes.json");
  useEffect(() => {
    if (code.length > 0) {
      if (typeof code[0] === "string") {
        updateCode(code[0] + "/theme.json");

      }
      
      if (typeof code[0] === "object")
        setTheme(code);
    }
  }, [code, theme])
  return (
      <div>
        {theme.map((key, index) => {
        const Component = componentMapping[key.name];
        // console.log(Component);
        return <Component key={index} id={key?.data?.id} className={key?.data?.className}/>
      })}
      </div>
  );
}

export default App;
