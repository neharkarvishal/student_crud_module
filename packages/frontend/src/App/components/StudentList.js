import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStudents } from '../action/fetchStudentsAction';
import Loading from '../screens/layouts/loading';
import Div, {
  Body,
  Button,
  Data,
  Header,
  Row,
  Table,
  TableHeader,
  Text,
} from '../htmlTags';

/* Component for rendering single student in the table */
class Student extends PureComponent {
  render() {
    const student = this.props.studentDetail;
    return (
      <Row uniqkey={student._id}>
        <Data>{student._id}</Data>
        <Data>{student.name}</Data>
        <Data>{student.email}</Data>
        <Data>{student.phone}</Data>
        <Data>{student.isAdmitted}</Data>
        <Data>
          <Link to={`/student/${student._id}`}>
            <Button className="btn btn-outline-primary">
              <Text>View</Text>
            </Button>
          </Link>
        </Data>
      </Row>
    );
  }
}

/* Component for rendering table of all students */
class StudentList extends PureComponent {
  constructor(props) {
    super(props);
    this.props.dispatch(fetchStudents()); // get all students
  }

  render() {
    if (
      this.props.studentListStoreState &&
      this.props.studentListStoreState.isLoading
    )
      return <Loading />;
    const { studentList } = this.props.studentListStoreState;
    const renderStudentList = studentList.map(studentDetail => (
      <Student key={studentDetail.id} studentDetail={studentDetail} />
    ));
    return (
      <Div className="col-md-12 col-lg-12">
        <Div className="card mb-4">
          <Div className="card-block">
            <h3 className="card-title" style={{ textAlign: 'center' }}>
              <Text>Students</Text>
            </h3>
            <Div className="table-responsive">
              <Table className="table table-striped">
                <TableHeader>
                  <Row style={{ textAlign: 'center' }}>
                    <Header>Student Id</Header>
                    <Header>Name</Header>
                    <Header>Email</Header>
                    <Header>Phone</Header>
                    <Header>Status</Header>
                  </Row>
                </TableHeader>
                <Body>{renderStudentList}</Body>
              </Table>
            </Div>
          </Div>
        </Div>
      </Div>
    );
  }
}

export default connect(
  state => ({
    studentListStoreState: state.studentListStoreState,
  }),
  null,
)(StudentList);
