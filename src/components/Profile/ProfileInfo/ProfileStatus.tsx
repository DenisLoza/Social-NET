import React, {ChangeEvent} from "react"


class ProfileStatus extends React.Component<propsProfileStatusType, stateProfileStatusType> {

    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e:  ChangeEvent<HTMLInputElement>) => {
        this.setState ({
            status: e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps: propsProfileStatusType, prevState: stateProfileStatusType, snapshot?: any) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return <div>
            {/*отобразить если editMode: false*/}
            {!this.state.editMode &&
            <div>
                <span onDoubleClick={this.activateEditMode}> {this.props.status || "my status"} </span>
            </div>
            }
            {/*отобразить если editMode: true*/}
            {this.state.editMode &&
            <div>
                <input autoFocus={true}
                       onBlur={this.deactivateEditMode}
                       onChange={this.onStatusChange}
                       value={this.state.status}/>
            </div>
            }
        </div>
    }
}
export default ProfileStatus


type propsProfileStatusType = {
    status: string
    updateStatus: (newStatus: string) => void
}
type stateProfileStatusType = {
    editMode: boolean
    status: string
}


