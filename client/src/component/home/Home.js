import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HomeItem from './HomeItem';
import { getCourses } from '../../actions/courseActions';
import { connect } from 'react-redux';
import Spinner from '../spinner/Spinner';

class Home extends Component {

    constructor() {
        super();

        this.state = {
            showDropNew: true,
            showDropRate: true,
            showDropView: true,
            showDropAll: true
        }
    }

    componentDidMount() {
        this.props.getCourses();
    }

    render() {

        const { courses, loading } = this.props.course;
        const { showDropNew, showDropRate, showDropView, showDropAll } = this.state;
        let courseItems;

        if (courses === null || loading) {
            courseItems = <Spinner />;
        } else {
            if (courses.length > 0) {
                courseItems = courses.map(course => (
                    <HomeItem key={course._id} course={course} />
                ));
            } else {
                courseItems = <h4>You haven't enrolled any courses yet!</h4>;
            }
        }

        return (
            <div>
                <label className="heading-slot">Home</label>
                <div className="home-slot home-sub">
                    <div className="home-label" onClick={() => this.setState({ showDropNew: !this.state.showDropNew })}>
                        <label>New</label>
                        <label className="navigate-view">View All</label>
                    </div>
                    {showDropNew ? (
                        <div>
                            {courseItems}
                        </div>
                    ) : null}
                </div>
                <div className="home-slot home-sub">
                    <div className="home-label" onClick={() => this.setState({ showDropRate: !this.state.showDropRate })}>
                        <label>Most Rated</label>
                        <label className="navigate-view">View All</label>
                    </div>
                    {showDropRate ? (
                        <div>
                            {courseItems}
                        </div>
                    ) : null}
                </div>
                <div className="home-slot home-sub">
                    <div className="home-label" onClick={() => this.setState({ showDropView: !this.state.showDropView })}>
                        <label>Most Viewed</label>
                        <label className="navigate-view">View All</label>
                    </div>
                    {showDropView ? (
                        <div>
                           {courseItems}
                        </div>
                    ) : null}
                </div>
                <div className="home-slot home-sub">
                    <div className="home-label" onClick={() => this.setState({ showDropAll: !this.state.showDropAll })}>
                        <label>All Course</label>
                        <label className="navigate-view">View All</label>
                    </div>
                    {showDropAll ? (
                        <div>
                           {courseItems}
                        </div>
                    ) : null}
                </div>
            </div>
        );
    }
}

Home.propTypes = {
    getCourses: PropTypes.func.isRequired,
    course: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    course: state.course
});

export default connect(mapStateToProps, { getCourses })(Home);