import React from 'react';
import Candidate from './Candidate';
import candidateData from '../placeholders/candidateData';
import { Container, Row, Col, Card } from 'react-bootstrap';

function CandidatesPlaced() {
  // Filter the candidateData array to only include candidates who have been placed
  const placedCandidates = candidateData.filter(candidate => candidate.isPlaced);

  return (
    <div className="Candidatebackground">
    <div className="Candidate-list row">
      {placedCandidates.map((candidate, index) => (
        <Col  className="Candidate-card">
              <div key={candidate.jobsId} md={3} >
                      <Candidate
                        key={index}
                        name={candidate.name}
                        title={candidate.title}
                        image={candidate.image}
                        deployedLink={candidate.deployedLink}
                        githubLink={candidate.githubLink}
                      />
               </div>
        </Col>
      ))}
    </div>
  </div>
  );
}

export default CandidatesPlaced;
