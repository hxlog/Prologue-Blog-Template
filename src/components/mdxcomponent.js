import Image from "next/image"
import { useMDXComponent } from "next-contentlayer/hooks"
import Link from "next/link"



const ResponsiveImage = (props) => (
  <Image
    alt={props.alt}
    width={1920}
    height={1080}
    quality={100}
    {...props}
    className="drop-shadow rounded"
  />
);


const components = {
  img: ResponsiveImage,
  a: Link 
};


export function MDXComponent({ code }) {
  const Component = useMDXComponent(code)

  return<Component components={components} />  
}