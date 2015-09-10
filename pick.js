/**
 * $pick
 * 
 * Retorna uma cópia parcial de um objeto que contém somente as chaves especificadas e
 * atribuindo undefined para chaves nao encontrada a funcao curry
 * 
 * @module $pick
 * @author Cleber de Moraes Goncalves <cleber.programmer>
 * @example
 * 
 *        $pick(['a', 'd'], {a: 1, b: 2, c: 3, d: 4});
 * 
 */
this.Ninja.module('$pick', ['$curry', '$reduce', '$prop'], function ($curry, $reduce, $prop) {
  
  /**
   * Retorna uma cópia parcial de um objeto que contém somente as chaves especificadas e
   * atribuindo undefined para chaves nao encontrada
   * 
   * @public
   * @method pick
   * @param {Array} a Chaves para montar o novo objeto
   * @param {Object} b Objeto de referencia
   * @return {Object} Novo objeto somente com as chaves especificadas
   * @example
   * 
   *        $pick(['a', 'd'], {a: 1, b: 2, c: 3, d: 4});
   *
   */
  function pick(a, b) {
    return $reduce(a, {}, function (x, y) {
      return Object.defineProperty(x, y, { value: $prop(y, b) });
    });
  }
  
  /**
   * Revelacao do modulo $pick, encapsulando a visibilidade das funcoes
   * privadas
   */
  return $curry(pick);

});