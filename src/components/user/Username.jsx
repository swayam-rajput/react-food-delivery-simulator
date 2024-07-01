import { useSelector } from 'react-redux';

function Username({classname}) {
  const user = useSelector((state) => state.user.username);

  if (!user) 
    return null;

  return (
    <>
        <div className={classname}>{user}</div>
    
    </>
  );
}

export default Username;