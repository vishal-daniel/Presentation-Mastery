import React from 'react';
import PropTypes from 'prop-types';

export default function SpeakersView(props) {
  try {
    const results = props.messages.map((msg) =>
      msg.results.map((result, i) => (
        <div key={`result-${msg.result_index + i}`}>
          <dt>{typeof result.speaker === 'number'
            ? `Speaker ${result.speaker}: `
            : '(Detecting speakers): '}</dt>
          <dd>{result.alternatives[0].transcript}</dd>
        </div>
      ))).reduce((a, b) => a.concat(b), []); // the reduce() call flattens the array
    return (
      <dialog className="speaker-labels">
        {results}
      </dialog>
    );
  } catch (ex) {
    console.log(ex);
    return (
      <span>{ex.message}</span>
    );
  }
}

SpeakersView.propTypes = {
  messages: PropTypes.array.isRequired, // eslint-disable-line
};
