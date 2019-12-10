import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Loading from '../screens/layouts/loading';
import Div, { Text } from '../htmlTags';
import { fetchStudent } from '../action/fetchStudentAction';

/* Component for rendering single student with details */
class StudentDetail extends PureComponent {
  constructor(props) {
    super(props);
    this.props.dispatch(fetchStudent(props.match.params.id)); // get post id
  }

  render() {
    if (this.props.studentDetailsStoreState.isLoading) return <Loading />;
    const { studentDetails } = this.props.studentDetailsStoreState;
    return (
      <Div className="col-md-12 col-lg-10">
        <Div className="card">
          <Div className="card-header">
            <Text>Student Id : {studentDetails._id}</Text>
          </Div>
          <Div className="card-block" style={{ textAlign: 'center' }}>
            <Text> Name : {studentDetails.name}</Text>
          </Div>
        </Div>
        <hr />
        <Div className="card">
          <Div className="card-header">
            <Text>Contacts :</Text>
          </Div>
          <Div className="card-block" style={{ textAlign: 'center' }}>
            <Text>{studentDetails.email}</Text>
            <Text>{studentDetails.phone}</Text>
          </Div>
        </Div>
      </Div>
    );
  }
}
export default connect(
  state => ({
    studentDetailsStoreState: state.studentDetailsStoreState,
  }),
  null,
)(StudentDetail);
