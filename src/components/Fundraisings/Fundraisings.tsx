import React, { useState, useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import OwnerControl from '../OwnerControl/OwnerControl';
import './fundraisings.scss';

const PER_PAGE_LIMIT = 10;

interface Project {
  id: number;
  name: string;
  url: string;
  description: string;
  wallet: string;
}

function Fundraisings() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState<Project[]>();

  useEffect(() => {
    const getProjects = async () => {
      setProjects(await window.contract.get({ offset: 0, limit: PER_PAGE_LIMIT }));
    };
    getProjects()
      .catch((error: Error) => console.log(error));
  }, []);

  const del = (id: number): void => {
    window.contract.del({ id });
  };

  return (
    <Container className="tableContainer">
      <Table striped borderless hover>
        <tbody>
          {
            projects?.map((el, index) => (
              <tr key={el.id}>
                <td>{index + 1}</td>
                <td>{el.name}</td>
                <td>
                  <button
                    type="button"
                    className="tableContainer__button"
                    onClick={() => {
                      navigate(`/fundraisings/${el.id}`);
                    }}
                  >
                    Go to Foundraising
                  </button>
                </td>
                <td>
                  <OwnerControl el={el}>
                    <button
                      type="button"
                      className="tableContainer__closeButton"
                      onClick={() => {
                        del(el.id);
                      }}
                    >
                      Close Foundraising
                    </button>
                  </OwnerControl>
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </Container>
  );
}

export default Fundraisings;
