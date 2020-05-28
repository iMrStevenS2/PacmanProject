
/**
 * 
 * @param {Object} world 
 * @param {Object} mapa 
 * @returns {Boolean}
 * @returns 
 */
/*
function verificarMovimientoRight(world, mapa) {
    if (world.pacman.xOne >= 0 && world.pacman.xOne < length(first(mapa)) &&
      world.pacman.yOne >= 0 && world.pacman.yOne < length(mapa)) {
      if (mapa[world.pacman.yOne][world.pacman.xOne + 1] != 1) {
        return true;
      }
    } {
      return false;
    }
  }
  */
 /*
bolaDeAtaque: laser, bolaDeAtaqueTwo: laserTwo, bolaDeAtaqueThree: laserVertical, bolaDeAtaqueFour: laserVerticalTwo
/**
        * Realiza el Movimiento del Fantasma Amarillo Siempre y Cuando No Tenga un Muro en la Dirección en la Que Realiza el Movimiento
        * @param {Object} world 
        * @param {Object} mapa 
        * @returns {Array}
        */
function movimientoFantasmaFourYellow(world, mapa) {
  //movimiento hacia arriba
  if (isValidFantasmaYellowUp(world, mapa) == true && world.fantasmaYellow.direxYellow != "DOWN") {

    //funcion movimientos fantasma Amarillo

    function movimientoFantasmaFour(world, mapa) {
      //movimiento hacia arriba
      if (isValidFantasmaYellowUp(world, mapa) == true && world.fantasmaYellow.direxYellow != "DOWN") {

        if (world.fantasmaYellow.yYellow <= world.pacman.yOne && world.pacman.xOne <= world.fantasmaYellow.xYellow) {

          if (isValidFantasmaYellowRight(world, mapa) == true && world.fantasmaYellow.direxYellow != "LEFT") {

            if (isValidFantasmaYellowDown(world, mapa) == true && world.fantasmaYellow.direxYellow != "UP") {

              return { xYellow: world.fantasmaYellow.xYellow, yYellow: world.fantasmaYellow.yYellow + 1, direxYellow: "DOWN" }

            }

          } else if (isValidFantasmaYellowLeft(world, mapa) == true && world.fantasmaYellow.direxYellow != "RIGHT") {

            return { xYellow: world.fantasmaYellow.xYellow - 1, yYellow: world.fantasmaYellow.yYellow, direxYellow: "LEFT" }

          }
          if (isValidFantasmaYellowDown(world, mapa) == true && world.fantasmaYellow.direxYellow != "UP") {
            return { xYellow: world.fantasmaYellow.xYellow, yYellow: world.fantasmaYellow.yYellow + 1, direxYellow: "DOWN" }
          }

        } else if (world.fantasmaYellow.yYellow <= world.pacman.yOne) {

          if (isValidFantasmaYellowRight(world, mapa) == true && world.fantasmaYellow.direxYellow != "LEFT") {

            if (isValidFantasmaYellowDown(world, mapa) == true && world.fantasmaYellow.direxYellow != "UP") {

              return { xYellow: world.fantasmaYellow.xYellow, yYellow: world.fantasmaYellow.yYellow + 1, direxYellow: "DOWN" }

            }

          } else if (isValidFantasmaYellowLeft(world, mapa) == true && world.fantasmaYellow.direxYellow != "RIGHT") {

            if (isValidFantasmaYellowDown(world, mapa) == true && world.fantasmaYellow.direxYellow != "UP") {

              return { xYellow: world.fantasmaYellow.xYellow, yYellow: world.fantasmaYellow.yYellow + 1, direxYellow: "DOWN" }

            }

          }
          if (isValidFantasmaYellowDown(world, mapa) == true && world.fantasmaYellow.direxYellow != "UP") {
            return { xYellow: world.fantasmaYellow.xYellow, yYellow: world.fantasmaYellow.yYellow + 1, direxYellow: "DOWN" }
          }

        }

        if (isValidFantasmaYellowUp(world, mapa) == true && world.fantasmaYellow.direxYellow != "DOWN") {
          return { xYellow: world.fantasmaYellow.xYellow, yYellow: world.fantasmaYellow.yYellow - 1, direxYellow: "UP" }
        }

      }
      // movimiento hacia Abajo      
      else if (isValidFantasmaYellowDown(world, mapa) == true && world.fantasmaYellow.direxYellow != "UP") {

        if (world.pacman.yOne <= world.fantasmaYellow.yYellow && world.fantasmaYellow.xYellow <= world.pacman.xOne) {

          if (isValidFantasmaYellowRight(world, mapa) == true && world.fantasmaYellow.direxYellow != "LEFT") {

            return { xYellow: world.fantasmaYellow.xYellow + 1, yYellow: world.fantasmaYellow.yYellow, direxYellow: "RIGHT" }

          } else if (isValidFantasmaYellowLeft(world, mapa) == true && world.fantasmaYellow.direxYellow != "RIGHT") {

            if (isValidFantasmaYellowUp(world, mapa) == true && world.fantasmaYellow.direxYellow != "DOWN") {

              return { xYellow: world.fantasmaYellow.xYellow, yYellow: world.fantasmaYellow.yYellow - 1, direxYellow: "UP" }

            }


          }
          if (isValidFantasmaYellowUp(world, mapa) == true && world.fantasmaYellow.direxYellow != "DOWN") {

            return { xYellow: world.fantasmaYellow.xYellow, yYellow: world.fantasmaYellow.yYellow - 1, direxYellow: "UP" }

          }
        } else if (world.fantasmaYellow.yYellow <= world.pacman.yOne) {

          if (isValidFantasmaYellowRight(world, mapa) == true && world.fantasmaYellow.direxYellow != "LEFT") {

            if (isValidFantasmaYellowUp(world, mapa) == true && world.fantasmaYellow.direxYellow != "DOWN") {

              return { xYellow: world.fantasmaYellow.xYellow, yYellow: world.fantasmaYellow.yYellow - 1, direxYellow: "UP" }

            }

          } else if (isValidFantasmaYellowLeft(world, mapa) == true && world.fantasmaYellow.direxYellow != "RIGHT") {

            if (isValidFantasmaYellowUp(world, mapa) == true && world.fantasmaYellow.direxYellow != "DOWN") {

              return { xYellow: world.fantasmaYellow.xYellow, yYellow: world.fantasmaYellow.yYellow - 1, direxYellow: "UP" }

            }
          }

        } else if (world.fantasmaYellow.yYellow <= world.pacman.yOne && world.pacman.xOne <= world.fantasmaYellow.xYellow) {

          if (isValidFantasmaYellowRight(world, mapa) == true && world.fantasmaYellow.direxYellow != "LEFT") {

            if (isValidFantasmaYellowUp(world, mapa) == true && world.fantasmaYellow.direxYellow != "DOWN") {

              return { xYellow: world.fantasmaYellow.xYellow, yYellow: world.fantasmaYellow.yYellow - 1, direxYellow: "UP" }

            }

          } else if (isValidFantasmaYellowLeft(world, mapa) == true && world.fantasmaYellow.direxYellow != "RIGHT") {

            return { xYellow: world.fantasmaYellow.xYellow - 1, yYellow: world.fantasmaYellow.yYellow, direxYellow: "LEFT" }

          }

          if (isValidFantasmaYellowUp(world, mapa) == true && world.fantasmaYellow.direxYellow != "DOWN") {

            return { xYellow: world.fantasmaYellow.xYellow, yYellow: world.fantasmaYellow.yYellow - 1, direxYellow: "UP" }

          }

        }
        if (isValidFantasmaYellowDown(world, mapa) == true && world.fantasmaYellow.direxYellow != "UP") {
          return { xYellow: world.fantasmaYellow.xYellow, yYellow: world.fantasmaYellow.yYellow + 1, direxYellow: "DOWN" }
        }

      }
      // movimiento izquierda          
      else if (isValidFantasmaYellowLeft(world, mapa) == true && world.fantasmaYellow.direxYellow != "RIGHT") {

        if (isValidFantasmaYellowRight(world, mapa) == false && world.fantasmaYellow.yYellow <= world.pacman.yOne && world.fantasmaYellow.direxYellow != "LEFT") {

          if (isValidFantasmaYellowDown(world, mapa) == true && world.fantasmaYellow.direxYellow != "UP") {

            return { xYellow: world.fantasmaYellow.xYellow, yYellow: world.fantasmaYellow.yYellow + 1, direxYellow: "DOWN" }

          }

        } else if (isValidFantasmaYellowRight(world, mapa) == false && world.pacman.yOne <= world.fantasmaYellow.yYellow && world.fantasmaYellow.direxYellow != "LEFT") {

          if (isValidFantasmaYellowUp(world, mapa) == true && world.fantasmaYellow.direxYellow != "DOWN") {

            return { xYellow: world.fantasmaYellow.xYellow, yYellow: world.fantasmaYellow.yYellow - 1, direxYellow: "UP" }
          }

        } else if (world.fantasmaYellow.xYellow <= world.pacman.xOne) {

          if (isValidFantasmaYellowUp(world, mapa) == true && world.fantasmaYellow.direxYellow != "DOWN") {

            if (sValidFantasmaThereeRight(world, mapa) == true && world.fantasmaYellow.direxYellow != "LEFT") {

              return { xYellow: world.fantasmaYellow.xYellow + 1, yYellow: world.fantasmaYellow.yYellow, direxYellow: "RIGHT" }

            }

          } else if (isValidFantasmaYellowDown(world, mapa) == true && world.fantasmaYellow.direxYellow != "UP") {

            if (sValidFantasmaThereeRight(world, mapa) == true && world.fantasmaYellow.direxYellow != "LEFT") {

              return { xYellow: world.fantasmaYellow.xYellow + 1, yYellow: world.fantasmaYellow.yYellow, direxYellow: "RIGHT" }

            }

          }

          if (isValidFantasmaYellowRight(world, mapa) == true && world.fantasmaYellow.direxYellow != "LEFT") {

            return { xYellow: world.fantasmaYellow.xYellow + 1, yYellow: world.fantasmaYellow.yYellow, direxYellow: "RIGHT" }

          }
          if (isValidFantasmaYellowLeft(world, mapa) == true && world.fantasmaYellow.direxYellow != "RIGHT") {
            return { xYellow: world.fantasmaYellow.xYellow - 1, yYellow: world.fantasmaYellow.yYellow, direxYellow: "LEFT" }
          }

        }


      }
      // movimiento hacia arriba
      else if (isValidFantasmaYellowRight(world, mapa) == true && world.fantasmaYellow.direxYellow != "LEFT") {

        if (isValidFantasmaYellowLeft(world, mapa) == false && world.fantasmaYellow.yYellow <= world.pacman.yOne && world.fantasmaYellow.direxYellow != "RIGHT") {

          if (isValidFantasmaYellowDown(world, mapa) == true && world.fantasmaYellow.direxYellow != "UP") {
            return { xYellow: world.fantasmaYellow.xYellow, yYellow: world.fantasmaYellow.yYellow + 1, direxYellow: "DOWN" }
          }

        } else if (isValidFantasmaYellowLeft(world, mapa) == false && world.pacman.yOne <= world.fantasmaYellow.yYellow && world.fantasmaYellow.direxYellow != "RIGHT") {

          if (isValidFantasmaYellowUp(world, mapa) == true && world.fantasmaYellow.direxYellow != "DOWN") {

            return { xYellow: world.fantasmaYellow.xYellow, yYellow: world.fantasmaYellow.yYellow - 1, direxYellow: "UP" }
          }

        } else if (world.pacman.xOne <= world.fantasmaYellow.xYellow) {

          if (isValidFantasmaYellowUp(world, mapa) == true && world.fantasmaYellow.direxYellow != "DOWN") {

            if (isValidFantasmaYellowLeft(world, mapa) == true && world.fantasmaYellow.direxYellow != "RIGHT") {

              return { xYellow: world.fantasmaYellow.xYellow - 1, yYellow: world.fantasmaYellow.yYellow, direxYellow: "LEFT" }

            }


          } else if (isValidFantasmaYellowDown(world, mapa) == true && world.fantasmaYellow.direxYellow != "UP") {

            if (isValidFantasmaYellowLeft(world, mapa) == true && world.fantasmaYellow.direxYellow != "RIGHT") {

              return { xYellow: world.fantasmaYellow.xYellow - 1, yYellow: world.fantasmaYellow.yYellow, direxYellow: "LEFT" }

            }


          }
          if (isValidFantasmaYellowLeft(world, mapa) == true && world.fantasmaYellow.direxYellow != "RIGHT") {

            return { xYellow: world.fantasmaYellow.xYellow - 1, yYellow: world.fantasmaYellow.yYellow, direxYellow: "LEFT" }

          }


        }
        if (isValidFantasmaYellowRight(world, mapa) == true && world.fantasmaYellow.direxYellow != "LEFT") {
          return { xYellow: world.fantasmaYellow.xYellow + 1, yYellow: world.fantasmaYellow.yYellow, direxYellow: "RIGHT" }
        }
      }

      return { xYellow: world.fantasmaYellow.xYellow - 1, yYellow: world.fantasmaYellow.yYellow, direxYellow: "LEFT" }
    }

    if (world.fantasmaYellow.yYellow <= world.pacman.yOne && world.pacman.xOne <= world.fantasmaYellow.xYellow) {

      if (isValidFantasmaYellowRight(world, mapa) == true && world.fantasmaYellow.direxYellow != "LEFT") {

        if (isValidFantasmaYellowDown(world, mapa) == true && world.fantasmaYellow.direxYellow != "UP") {

          return { xYellow: world.fantasmaYellow.xYellow, yYellow: world.fantasmaYellow.yYellow + 1, direxYellow: "DOWN" }

        }

      } else if (isValidFantasmaYellowLeft(world, mapa) == true && world.fantasmaYellow.direxYellow != "RIGHT") {

        return { xYellow: world.fantasmaYellow.xYellow - 1, yYellow: world.fantasmaYellow.yYellow, direxYellow: "LEFT" }

      }
      if (isValidFantasmaYellowDown(world, mapa) == true && world.fantasmaYellow.direxYellow != "UP") {
        return { xYellow: world.fantasmaYellow.xYellow, yYellow: world.fantasmaYellow.yYellow + 1, direxYellow: "DOWN" }
      }

    } else if (world.fantasmaYellow.yYellow <= world.pacman.yOne) {

      if (isValidFantasmaYellowRight(world, mapa) == true && world.fantasmaYellow.direxYellow != "LEFT") {

        if (isValidFantasmaYellowDown(world, mapa) == true && world.fantasmaYellow.direxYellow != "UP") {

          return { xYellow: world.fantasmaYellow.xYellow, yYellow: world.fantasmaYellow.yYellow + 1, direxYellow: "DOWN" }

        }

      } else if (isValidFantasmaYellowLeft(world, mapa) == true && world.fantasmaYellow.direxYellow != "RIGHT") {

        if (isValidFantasmaYellowDown(world, mapa) == true && world.fantasmaYellow.direxYellow != "UP") {

          return { xYellow: world.fantasmaYellow.xYellow, yYellow: world.fantasmaYellow.yYellow + 1, direxYellow: "DOWN" }

        }

      }
      if (isValidFantasmaYellowDown(world, mapa) == true && world.fantasmaYellow.direxYellow != "UP") {
        return { xYellow: world.fantasmaYellow.xYellow, yYellow: world.fantasmaYellow.yYellow + 1, direxYellow: "DOWN" }
      }

    }

    if (isValidFantasmaYellowUp(world, mapa) == true && world.fantasmaYellow.direxYellow != "DOWN") {
      return { xYellow: world.fantasmaYellow.xYellow, yYellow: world.fantasmaYellow.yYellow - 1, direxYellow: "UP" }
    }

  }
  // movimiento hacia Abajo      
  else if (isValidFantasmaYellowDown(world, mapa) == true && world.fantasmaYellow.direxYellow != "UP") {

    if (world.pacman.yOne <= world.fantasmaYellow.yYellow && world.fantasmaYellow.xYellow <= world.pacman.xOne) {

      if (isValidFantasmaYellowRight(world, mapa) == true && world.fantasmaYellow.direxYellow != "LEFT") {

        return { xYellow: world.fantasmaYellow.xYellow + 1, yYellow: world.fantasmaYellow.yYellow, direxYellow: "RIGHT" }

      } else if (isValidFantasmaYellowLeft(world, mapa) == true && world.fantasmaYellow.direxYellow != "RIGHT") {

        if (isValidFantasmaYellowUp(world, mapa) == true && world.fantasmaYellow.direxYellow != "DOWN") {

          return { xYellow: world.fantasmaYellow.xYellow, yYellow: world.fantasmaYellow.yYellow - 1, direxYellow: "UP" }

        }


      }
      if (isValidFantasmaYellowUp(world, mapa) == true && world.fantasmaYellow.direxYellow != "DOWN") {

        return { xYellow: world.fantasmaYellow.xYellow, yYellow: world.fantasmaYellow.yYellow - 1, direxYellow: "UP" }

      }
    } else if (world.fantasmaYellow.yYellow <= world.pacman.yOne) {

      if (isValidFantasmaYellowRight(world, mapa) == true && world.fantasmaYellow.direxYellow != "LEFT") {

        if (isValidFantasmaYellowUp(world, mapa) == true && world.fantasmaYellow.direxYellow != "DOWN") {

          return { xYellow: world.fantasmaYellow.xYellow, yYellow: world.fantasmaYellow.yYellow - 1, direxYellow: "UP" }

        }

      } else if (isValidFantasmaYellowLeft(world, mapa) == true && world.fantasmaYellow.direxYellow != "RIGHT") {

        if (isValidFantasmaYellowUp(world, mapa) == true && world.fantasmaYellow.direxYellow != "DOWN") {

          return { xYellow: world.fantasmaYellow.xYellow, yYellow: world.fantasmaYellow.yYellow - 1, direxYellow: "UP" }

        }
      }

    } else if (world.fantasmaYellow.yYellow <= world.pacman.yOne && world.pacman.xOne <= world.fantasmaYellow.xYellow) {

      if (isValidFantasmaYellowRight(world, mapa) == true && world.fantasmaYellow.direxYellow != "LEFT") {

        if (isValidFantasmaYellowUp(world, mapa) == true && world.fantasmaYellow.direxYellow != "DOWN") {

          return { xYellow: world.fantasmaYellow.xYellow, yYellow: world.fantasmaYellow.yYellow - 1, direxYellow: "UP" }

        }

      } else if (isValidFantasmaYellowLeft(world, mapa) == true && world.fantasmaYellow.direxYellow != "RIGHT") {

        return { xYellow: world.fantasmaYellow.xYellow - 1, yYellow: world.fantasmaYellow.yYellow, direxYellow: "LEFT" }

      }

      if (isValidFantasmaYellowUp(world, mapa) == true && world.fantasmaYellow.direxYellow != "DOWN") {

        return { xYellow: world.fantasmaYellow.xYellow, yYellow: world.fantasmaYellow.yYellow - 1, direxYellow: "UP" }

      }

    }
    if (isValidFantasmaYellowDown(world, mapa) == true && world.fantasmaYellow.direxYellow != "UP") {
      return { xYellow: world.fantasmaYellow.xYellow, yYellow: world.fantasmaYellow.yYellow + 1, direxYellow: "DOWN" }
    }

  }
  // movimiento izquierda          
  else if (isValidFantasmaYellowLeft(world, mapa) == true && world.fantasmaYellow.direxYellow != "RIGHT") {

    if (isValidFantasmaYellowRight(world, mapa) == false && world.fantasmaYellow.yYellow <= world.pacman.yOne && world.fantasmaYellow.direxYellow != "LEFT") {

      if (isValidFantasmaYellowDown(world, mapa) == true && world.fantasmaYellow.direxYellow != "UP") {

        return { xYellow: world.fantasmaYellow.xYellow, yYellow: world.fantasmaYellow.yYellow + 1, direxYellow: "DOWN" }

      }

    } else if (isValidFantasmaYellowRight(world, mapa) == false && world.pacman.yOne <= world.fantasmaYellow.yYellow && world.fantasmaYellow.direxYellow != "LEFT") {

      if (isValidFantasmaYellowUp(world, mapa) == true && world.fantasmaYellow.direxYellow != "DOWN") {

        return { xYellow: world.fantasmaYellow.xYellow, yYellow: world.fantasmaYellow.yYellow - 1, direxYellow: "UP" }
      }

    } else if (world.fantasmaYellow.xYellow <= world.pacman.xOne) {

      if (isValidFantasmaYellowUp(world, mapa) == true && world.fantasmaYellow.direxYellow != "DOWN") {

        if (sValidFantasmaThereeRight(world, mapa) == true && world.fantasmaYellow.direxYellow != "LEFT") {

          return { xYellow: world.fantasmaYellow.xYellow + 1, yYellow: world.fantasmaYellow.yYellow, direxYellow: "RIGHT" }

        }

      } else if (isValidFantasmaYellowDown(world, mapa) == true && world.fantasmaYellow.direxYellow != "UP") {

        if (sValidFantasmaThereeRight(world, mapa) == true && world.fantasmaYellow.direxYellow != "LEFT") {

          return { xYellow: world.fantasmaYellow.xYellow + 1, yYellow: world.fantasmaYellow.yYellow, direxYellow: "RIGHT" }

        }

      }

      if (isValidFantasmaYellowRight(world, mapa) == true && world.fantasmaYellow.direxYellow != "LEFT") {

        return { xYellow: world.fantasmaYellow.xYellow + 1, yYellow: world.fantasmaYellow.yYellow, direxYellow: "RIGHT" }

      }
      if (isValidFantasmaYellowLeft(world, mapa) == true && world.fantasmaYellow.direxYellow != "RIGHT") {
        return { xYellow: world.fantasmaYellow.xYellow - 1, yYellow: world.fantasmaYellow.yYellow, direxYellow: "LEFT" }
      }

    }


  }
  // movimiento hacia arriba
  else if (isValidFantasmaYellowRight(world, mapa) == true && world.fantasmaYellow.direxYellow != "LEFT") {

    if (isValidFantasmaYellowLeft(world, mapa) == false && world.fantasmaYellow.yYellow <= world.pacman.yOne && world.fantasmaYellow.direxYellow != "RIGHT") {

      if (isValidFantasmaYellowDown(world, mapa) == true && world.fantasmaYellow.direxYellow != "UP") {
        return { xYellow: world.fantasmaYellow.xYellow, yYellow: world.fantasmaYellow.yYellow + 1, direxYellow: "DOWN" }
      }

    } else if (isValidFantasmaYellowLeft(world, mapa) == false && world.pacman.yOne <= world.fantasmaYellow.yYellow && world.fantasmaYellow.direxYellow != "RIGHT") {

      if (isValidFantasmaYellowUp(world, mapa) == true && world.fantasmaYellow.direxYellow != "DOWN") {

        return { xYellow: world.fantasmaYellow.xYellow, yYellow: world.fantasmaYellow.yYellow - 1, direxYellow: "UP" }
      }

    } else if (world.pacman.xOne <= world.fantasmaYellow.xYellow) {

      if (isValidFantasmaYellowUp(world, mapa) == true && world.fantasmaYellow.direxYellow != "DOWN") {

        if (isValidFantasmaYellowLeft(world, mapa) == true && world.fantasmaYellow.direxYellow != "RIGHT") {

          return { xYellow: world.fantasmaYellow.xYellow - 1, yYellow: world.fantasmaYellow.yYellow, direxYellow: "LEFT" }

        }


      } else if (isValidFantasmaYellowDown(world, mapa) == true && world.fantasmaYellow.direxYellow != "UP") {

        if (isValidFantasmaYellowLeft(world, mapa) == true && world.fantasmaYellow.direxYellow != "RIGHT") {

          return { xYellow: world.fantasmaYellow.xYellow - 1, yYellow: world.fantasmaYellow.yYellow, direxYellow: "LEFT" }

        }


      }
      if (isValidFantasmaYellowLeft(world, mapa) == true && world.fantasmaYellow.direxYellow != "RIGHT") {

        return { xYellow: world.fantasmaYellow.xYellow - 1, yYellow: world.fantasmaYellow.yYellow, direxYellow: "LEFT" }

      }


    }
    if (isValidFantasmaYellowRight(world, mapa) == true && world.fantasmaYellow.direxYellow != "") {
      return { xYellow: world.fantasmaYellow.xYellow + 1, yYellow: world.fantasmaYellow.yYellow, direxYellow: "RIGHT" }
    }
  }
  return { xYellow: world.fantasmaYellow.xYellow - 1, yYellow: world.fantasmaYellow.yYellow, direxYellow: "LEFT" }
}


/*+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+*/


/**
 * Verifica si es posible que el fantasma azul realice un movimiento hacia la derecha
 * @param {Object} world 
 * @param {Object} mapa 
 * @returns {boolean} 
 */
function isValidFantasmaYellowRight(world, mapa) {
  if (world.fantasmaYellow.xYellow >= 0 && world.fantasmaYellow.xYellow < length(first(mapa)) && world.fantasmaYellow.yYellow >= 0 && world.fantasmaYellow.yYellow < length(mapa)) {
    if (mapa[world.fantasmaYellow.yYellow][world.fantasmaYellow.xYellow + 1] != 1) {
      return true;
    } {
      return false;
    }

  }
}

/**
 * Verifica si es posible que el fantasma Amarillo realice un movimiento hacia la izquierda
 * @param {Object} world 
 * @param {Object} mapa 
 * @returns {boolean} 
 */
function isValidFantasmaYellowLeft(world, mapa) {
  if (world.fantasmaYellow.xYellow >= 0 && world.fantasmaYellow.xYellow < length(first(mapa)) && world.fantasmaYellow.yYellow >= 0 && world.fantasmaYellow.yYellow < length(mapa)) {
    if (mapa[world.fantasmaYellow.yYellow][world.fantasmaYellow.xYellow - 1] != 1) {
      return true;
    }
  } {
    return false;
  }

}

/**
 * Verifica si es posible que el fantasma Amarillo realice un movimiento hacia arriba
 * @param {Object} world 
 * @param {Object} mapa 
 * @returns {boolean} 
 */
function isValidFantasmaYellowUp(world, mapa) {
  if (world.fantasmaYellow.xYellow >= 0 && world.fantasmaYellow.xYellow < length(first(mapa)) && world.fantasmaYellow.yYellow >= 0 && world.fantasmaYellow.yYellow < length(mapa)) {
    if (mapa[world.fantasmaYellow.yYellow - 1][world.fantasmaYellow.xYellow] != 1) {
      return true;
    } {
      return false;
    }

  }
}

/**
 * Verifica si es posible que el fantasma Amarillo realice un movimiento hacia abajo
 * @param {Object} world 
 * @param {Object} mapa 
 * @returns {boolean} 
 */
/*
function isValidFantasmaYellowDown(world, mapa) {
  if (world.fantasmaYellow.xYellow >= 0 && world.fantasmaYellow.xYellow < length(first(mapa)) && world.fantasmaYellow.yYellow >= 0 && world.fantasmaYellow.yYellow < length(mapa)) {
    if (mapa[world.fantasmaYellow.yYellow + 1][world.fantasmaYellow.xYellow] != 1) {
      return true;
    } {
      return false;
    }

  }
}
*/

window.onload(window.alert ());