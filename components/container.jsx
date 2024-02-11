import classNames from "classnames"

const Container = ({ sm = false, children }) => {
  return (
    <div className={ classNames("mx-auto", "max-w-7xl px-12", classNames({"max-w-3xl":true}))}>
        {children}
    </div>
  )
}

export default Container