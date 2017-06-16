// @flow
import React from 'react'

type Props = {
  value: mixed,
  onChange: (value: mixed) => any
}

type State = {
  value: mixed
}

export default function debounceInput(delay: number) {
  return (WrappedComponent: ReactClass<*>) =>
    class extends React.Component {
      static displayName = `DebounceInput(${getDisplayName(WrappedComponent)})`

      state: State
      props: Props
      propagateChange: () => void

      constructor(props: Props) {
        super(props)
        this.state = {
          value: props.value
        }

        this.propagateChange = debounce(() => {
          this.props.onChange(this.state.value)
        }, delay)
      }

      componentWillReceiveProps(nextProps: Props) {
        this.setState({ value: nextProps.value })
      }

      handleChange(value: mixed) {
        this.setState({ value })
        this.propagateChange()
      }

      render() {
        // eslint-disable-next-line no-unused-vars
        const { value, onChange, ...restProps } = this.props
        return (
          <WrappedComponent
            onChange={this.handleChange.bind(this)}
            value={this.state.value}
            {...restProps}
          />
        )
      }
    }
}

function debounce(func: () => void, delay: number, immediate) {
  let timeout
  return () => {
    const later = () => {
      timeout = null
      if (!immediate) func()
    }
    let callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, delay)
    if (callNow) func()
  }
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}
