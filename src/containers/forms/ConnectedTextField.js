// @flow
import { connect } from "react-redux"
import { updateDraft as updateDraftAction } from "../../actions/drafts"
import TextField from "../../components/forms/TextField"
import debounceInput from "../debounceInput"
import { valueSelector } from "../../selectors/drafts"

import type { Dispatch } from "redux"
import type { State } from "../../reducers/types"
import type { Action } from "../../actions/types"

type OwnProps = {
  draft: string,
  name: string,
  updateDraft?: (name: string, field: string, value: any) => any
}

type StateProps = {
  value: string
}

type DispatchProps = {
  onChange: (name: string, value: string) => Action
}

const mapStateToProps = (state: State, props: OwnProps): StateProps => ({
  value: valueSelector(state, props) || ""
})

const mapDispatchToProps = (
  dispatch: Dispatch<Action>,
  props: OwnProps
): DispatchProps => {
  const updateDraft = props.updateDraft || updateDraftAction
  return {
    onChange: value => dispatch(updateDraft(props.draft, props.name, value))
  }
}

export const ConnectedTextField = connect(mapStateToProps, mapDispatchToProps)(
  debounceInput(250)(TextField)
)

export default ConnectedTextField
