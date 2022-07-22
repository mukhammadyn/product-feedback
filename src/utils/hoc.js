const hoc = (hook, Component) => {

  const HocResult = (props) => {
    const hookProps = hook(props)
    return <Component {...props} {...hookProps} />
  }

  return HocResult
}

export default hoc
