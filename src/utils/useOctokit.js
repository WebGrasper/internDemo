import { useState, useEffect } from 'react';
import { octokit } from './octokit';
export default function useOctokit(temppath, convertToJSON = true) {
    const [code, setCode] = useState([]);
    const [path, setPath] = useState(temppath);

    useEffect(() => {
        async function onLoad() {
            await octokit.request(
                'GET /repos/{owner}/{repo}/contents/{path}', {
                owner: `${process.env.REACT_APP_GH_USER}`,
                repo: `${process.env.REACT_APP_GH_REPO}`,
                path: `${path}`
            })
                .then(res => {
                    const encoded = res.data.content;
                    let decoded = atob(encoded);
                    if (convertToJSON === true)
                        decoded = JSON.parse(decoded);
                    setCode(decoded);
                })
                .catch(err => console.log(err));
        }
        onLoad();
    }, [path])

    function updatePath(temp) {
        if (path !== temp) {
            setPath(temp);
        }
    }
    return [
        code,
        updatePath
    ]
};