import Image from "next/image";
import StaticPage from '../pages/static'
import DynamicPage from '../pages/dynamic'
export default function Home() {
  return (
 <>
<StaticPage data={"test"}/>
<DynamicPage data={"CHirag"} />
 </>
  );
}
