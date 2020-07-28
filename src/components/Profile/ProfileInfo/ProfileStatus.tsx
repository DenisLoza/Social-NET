import React from "react"

class ProfileStatus extends React.Component<any, any> {

    state = {
        editMode: false
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deActivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        return <div>
            {/*отобразить если editMode: false*/}
            {!this.state.editMode &&
            <div>
                <span onDoubleClick={this.activateEditMode}> {this.props.status} </span>
            </div>
            }
            {/*отобразить если editMode: true*/}
            {this.state.editMode &&
            <div>
                <input autoFocus={true} onBlur={this.deActivateEditMode} value={this.props.status}/>
            </div>
            }
        </div>
    }
}

export default ProfileStatus
