import React from 'react';
import { connect } from 'react-redux';

function Allquestions(props) {
  const { questions } = props;
  return (
    <div>
      <table>
        <tr>
          <th>Category</th>
          <th>Question</th>
          <th>Option1</th>
          <th>Option2</th>
          <th>Option3</th>
          <th>Option4</th>
          <th>Correct</th>
        </tr>

        {questions.map(i => (
          <tr>
            <td>{i.category}</td>
            <td>{i.question}</td>
            {i.answers.map(e => (
              <td>{e}</td>
            ))}
            <td class='correct'>{i.correct}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    questions: state.reducer.questions
  };
}

export default connect(mapStateToProps)(Allquestions);
