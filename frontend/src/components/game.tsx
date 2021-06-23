import * as React from "react";
import { Container, Row, Col } from "react-grid";
import { sendStartNewGame, sendScore } from "../controller/AppController";

enum IWeaponMap {
  S = "Scissors",
  P = "Paper",
  R = "Rock",
  none = "",
}

interface MyState {
  startNewGame: boolean;
  selectedWeapon?: IWeaponMap;
  pcWeapon?: IWeaponMap;
  result?: string;
  wins: number;
  lost: number;
}

export default class Game extends React.Component<any, MyState> {
  componentDidUpdate(prevProps, prevState) { 
    if (
      prevState.wins !== this.state.wins ||
      prevState.lost !== this.state.lost
    ) {
      sendScore(this.state.wins, this.state.lost);
    }
  }

  public constructor(props: any) {
    super(props);
    this.state = {
      startNewGame: false,
      wins: 0,
      lost: 0,
    };
  }

  private handleOnClickSelectWeapon(userWeapon: IWeaponMap): void {
    var pcWeapon: IWeaponMap = this.getRandomWeapon();
    this.setState({ pcWeapon: pcWeapon });
    this.CompareWeapons(pcWeapon, userWeapon);
  }
  private CompareWeapons(pcWeapon: IWeaponMap, userWeapon: IWeaponMap): void {
    if (pcWeapon === userWeapon) {
      this.setState({ result: "No Winner!" });
      return;
    }

    switch (userWeapon) {
      case IWeaponMap.S: {
        if (pcWeapon === IWeaponMap.P)
          this.setState({
            result: "You are the Winner!",
            wins: this.state.wins + 1,
          });
        else if (pcWeapon === IWeaponMap.R)
          this.setState({ result: "Loser!", lost: this.state.lost + 1 });
        break;
      }

      case IWeaponMap.P: {
        if (pcWeapon === IWeaponMap.R)
          this.setState({
            result: "You are the Winner!",
            wins: this.state.wins + 1,
          });
        else if (pcWeapon === IWeaponMap.S)
          this.setState({ result: "Loser!", lost: this.state.lost + 1 });
        break;
      }
      case IWeaponMap.R: {
        if (pcWeapon === IWeaponMap.P)
          this.setState({
            result: "You are the Winner!",
            wins: this.state.wins + 1,
          });
        else if (pcWeapon === IWeaponMap.S)
          this.setState({ result: "Loser!", lost: this.state.lost + 1 });
        break;
      }
      default: {
        break;
      }
    }
  }
  private getRandomWeapon(): IWeaponMap {
    var randomIndex = Math.floor(Math.random() * this.weapons.length);
    return this.weapons[randomIndex];
  }
  public weapons: IWeaponMap[] = [IWeaponMap.P, IWeaponMap.R, IWeaponMap.S];
  public render(): JSX.Element {
    return (
      <div>
        {!this.state.startNewGame && this.state.selectedWeapon === undefined ? (
          <div>
            <button
              onClick={() => {
                sendStartNewGame();
                this.setState({ startNewGame: true });
              }}
            >
              Start New Game
            </button>
          </div>
        ) : this.state.selectedWeapon === undefined ? (
          <div>
            <Container key={'key-cont'}>
              <b> Select your Weapon!</b>
              <Row>
                {this.weapons.map((item: IWeaponMap, index:number) => {
                  return ( 
                      <Col key={'key-col-'+ index}>
                        <button key={'key-button-'+ index}
                          onClick={() => {
                            this.setState({ selectedWeapon: item });
                            this.handleOnClickSelectWeapon(item);
                          }}
                        >
                          {item}
                        </button>
                      </Col> 
                  );
                })}
              </Row>
            </Container>
          </div>
        ) : (
          <>
            <div>
              <div style={{ padding: "10px" }}>
                <div>
                  PC Weapon:
                  <b style={{ color: "yellow" }}> {this.state.pcWeapon} </b>
                </div>
                <div>
                  Your Weapon:
                  <b style={{ color: "yellow" }}>
                    {" "}
                    {this.state.selectedWeapon}
                  </b>
                </div>
                <div>{this.state.result}</div>
              </div>
              <button
                onClick={() => {
                  sendStartNewGame();
                  this.setState({
                    selectedWeapon: undefined,
                    startNewGame: true,
                  });
                }}
              >
                Start New Game
              </button>
            </div>
          </>
        )}

        <div className="Score">
          Score: &nbsp;
          <span>
            Win <b style={{ color: "green" }}>{this.state.wins} </b>
          </span>
          <span>
            Lost <b style={{ color: "red" }}>{this.state.lost} </b>
          </span>
        </div>
      </div>
    );
  }
}
