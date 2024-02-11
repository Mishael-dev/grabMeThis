import classNames from "classnames"

const Container = ({ lg = false, md = false, sm = false, children }) => {
  return (
    <div classname={""}>
        {children}
    </div>
  )
}

export default Container