import Util from "./util.js";
/**
 * Pair クラス
 */
export default class Pair {
  /**
   * プロパティ
   */
  static #rank = 0; // 役を構成するランク

  /**
   * ロイヤルストレートフラッシュの成否を判定する
   */
  static isRoyalStraightFlush = (cards) => {
    // 役の判定フラグ（true：成立、false：不成立）
    let isPair = false;
    // 5枚とも同じ絵柄でランクが[10,11,12,13,14]
    if (
      cards[0].suit === cards[1].suit && // 1,2枚目が同じ絵柄
      cards[0].suit === cards[2].suit && // 1,3枚目が同じ絵柄
      cards[0].suit === cards[3].suit && // 1,4枚目が同じ絵柄
      cards[0].suit === cards[4].suit && // 1,5枚目が同じ絵柄
      cards[0].rank === 10 && // 1枚目のランクが10
      cards[0].rank === 11 && // 2枚目のランクが11(J)
      cards[0].rank === 12 && // 3枚目のランクが12(Q)
      cards[0].rank === 13 && // 4枚目のランクが13(K)
      cards[0].rank === 14 // 5枚目のランクが14(A)
    ) {
      isPair = true;
      // 5枚のランクを合計
      this.#rank = Util.sum(cards[0].rank,cards[1].rank,cards[2].rank,cards[3].rank,cards[4].rank);
    }
    return isPair;
  };

  /**
   * ストレートフラッシュの成否を判定する
   */
  static isStraightFlush = (cards) => {
    // 役の判定フラグ（true：成立、false：不成立）
    let isPair = false;
    // 5枚とも同じ絵柄でランクが連続
    if (
      cards[0].suit === cards[1].suit && // 1,2枚目が同じ絵柄
      cards[0].suit === cards[2].suit && // 1,3枚目が同じ絵柄
      cards[0].suit === cards[3].suit && // 1,4枚目が同じ絵柄
      cards[0].suit === cards[4].suit && // 1,5枚目が同じ絵柄
      // 1枚目のランクが2
      cards[0].rank === 2 &&
      // 1,2枚目のランクが連続
      cards[0].rank + 1 === cards[1].rank &&
      // 2,3枚目のランクが連続
      cards[1].rank + 1 === cards[2].rank &&
      // 3,4枚目のランクが連続
      cards[2].rank + 1 === cards[3].rank &&
      // 5枚目のランクが14（A)
      cards[4].rank === 14
    ) {
      isPair = true;
    // 5枚のランクを合計
      this.#rank = Util.sum(cards[0].rank,cards[1].rank,cards[2].rank,cards[3].rank,cards[4].rank);
    } else if (
      cards[0].suit === cards[1].suit && // 1,2枚目が同じ絵柄
      cards[0].suit === cards[2].suit && // 1,3枚目が同じ絵柄
      cards[0].suit === cards[3].suit && // 1,4枚目が同じ絵柄
      cards[0].suit === cards[4].suit && // 1,5枚目が同じ絵柄
      // 1,2枚目のランクが連続
      cards[0].rank + 1 === cards[1].rank &&
      // 2,3枚目のランクが連続
      cards[1].rank + 1 === cards[2].rank &&
      // 3,4枚目のランクが連続
      cards[2].rank + 1 === cards[3].rank &&
      // 4,5枚目のランクが連続
      cards[3].rank + 1 === cards[4].rank
    ) {
      isPair = true;
    // 5枚のランクを合計
      this.#rank = Util.sum(cards[0].rank,cards[1].rank,cards[2].rank,cards[3].rank,cards[4].rank);
    }
    return isPair;
  };

  /**
   * フォーカードの成否を判定する
   */
  static isFourCard = (cards) => {
    // 役の判定フラグ（true：成立、false：不成立）
    let isPair = false;
    // 1枚目から4枚目までのランクが同じ
    if (
      cards[0].rank === cards[1].rank && // 1,2枚目が同じランク
      cards[0].rank === cards[2].rank && // 1,3枚目が同じランク
      cards[0].rank === cards[3].rank && // 1,4枚目が同じランク
      // 1,5枚目のランクが異なる
      cards[0].rank !== cards[4].rank
    ) {
      isPair = true;
      // 1枚目から4枚目のランクを合計
      this.#rank = Util.sum(cards[0].rank,cards[1].rank,cards[2].rank,cards[3].rank);
    }
    // 2枚目から5枚目までのランクが同じ
    else if (
      // 1,2枚目のランクが異なる
      cards[0].rank !== cards[1].rank &&
      cards[1].rank === cards[2].rank && // 2,3枚目が同じランク
      cards[1].rank === cards[3].rank && // 2,4枚目が同じランク
      cards[1].rank === cards[4].rank // 2,5枚目が同じランク
    ) {
      isPair = true;
      // 2枚目から5枚目のランクを合計
      this.#rank = Util.sum(cards[1].rank,cards[2].rank,cards[3].rank,cards[4].rank);
    }
    return isPair;
  };

  /**
   * フルハウスの成否を判定する
   */
  static isFullHouse = (cards) => {
    // 役の判定フラグ（true：成立、false：不成立）
    let isPair = false;
    // 1,2枚目と3～5枚目のランクが同じ
    if (
      cards[0].rank === cards[1].rank && // 1,2枚目が同じランク
      // 2,3枚目のランクが異なる
      cards[1].rank !== cards[2].rank &&
      cards[2].rank === cards[3].rank && // 3,4枚目が同じランク
      cards[2].rank === cards[4].rank // 3,5枚目が同じランク
    ) {
      isPair = true;
      // 5枚のランクを合計
      this.#rank = Util.sum(cards[0].rank,cards[1].rank,cards[2].rank,cards[3].rank,cards[4].rank);
    }
    // 1～3枚目と4,5枚目のランクが同じ
    else if (
      cards[0].rank === cards[1].rank && // 1,2枚目が同じランク
      cards[0].rank === cards[2].rank && // 1,3枚目が同じランク
      // 3,4枚目のランクが異なる
      cards[2].rank !== cards[3].rank &&
      cards[3].rank === cards[4].rank // 4,5枚目が同じランク
    ) {
    isPair = true;
    // 5枚のランクを合計
    this.#rank = Util.sum(cards[0].rank,cards[1].rank,cards[2].rank,cards[3].rank,cards[4].rank);
    }
    return isPair;
  };

  /**
   * フラッシュの成否を判定する
   */
  static isFlush = (cards) => {
    // 役の判定フラグ（true：成立、false：不成立）
    let isPair = false;
    // 5枚とも同じ絵柄
    if (
      cards[0].suit === cards[1].suit && // 1,2枚目が同じ絵柄
      cards[0].suit === cards[2].suit && // 1,3枚目が同じ絵柄
      cards[0].suit === cards[3].suit && // 1,4枚目が同じ絵柄
      cards[0].suit === cards[4].suit // 1,5枚目が同じ絵柄
    ) {
      isPair = true;
      // 5枚のランクを合計
      this.#rank = Util.sum(cards[0].rank,cards[1].rank,cards[2].rank,cards[3].rank,cards[4].rank);
    }
    return isPair;
  };

  /**
   * ストレートの成否を判定する
   */
  static isStraight = (cards) => {
    // 役の判定フラグ（true：成立、false：不成立）
    let isPair = false;
    // 5枚のランクが連続
    if (
      // 1枚目のランクが2
      cards[0].rank === 2 &&
      // 1,2枚目のランクが連続
      cards[0].rank + 1 === cards[1].rank &&
      // 2,3枚目のランクが連続
      cards[1].rank + 1 === cards[2].rank &&
      // 3,4枚目のランクが連続
      cards[2].rank + 1 === cards[3].rank &&
      // 5枚目のランクが14（A)
      cards[4].rank === 14
    ) {
      isPair = true;
    // 5枚のランクを合計
      this.#rank = Util.sum(cards[0].rank,cards[1].rank,cards[2].rank,cards[3].rank,cards[4].rank);
    } else if (
      // 1,2枚目のランクが連続
      cards[0].rank + 1 === cards[1].rank &&
      // 2,3枚目のランクが連続
      cards[1].rank + 1 === cards[2].rank &&
      // 3,4枚目のランクが連続
      cards[2].rank + 1 === cards[3].rank &&
      // 4,5枚目のランクが連続
      cards[3].rank + 1 === cards[4].rank
    ) {
      isPair = true;
      // 5枚のランクを合計
      this.#rank = Util.sum(cards[0].rank,cards[1].rank,cards[2].rank,cards[3].rank,cards[4].rank);
    }
    return isPair;
  };

  /**
   * スリーカードの成否を判定する
   */
  static isThreeCard = (cards) => {
    // 役の判定フラグ（true：成立、false：不成立）
    let isPair = false;
    // 1～3枚目が同じランク
    if (
      cards[0].rank === cards[1].rank && // 1,2枚目が同じランク
      cards[0].rank === cards[2].rank // 1,3枚目が同じランク
    ) {
      isPair = true;
      // 1～3枚目のランクを合計
      this.#rank = Util.sum(cards[0].rank,cards[1].rank,cards[2].rank);
    }
    // 2～4枚目が同じランク
    if (
      cards[1].rank === cards[2].rank && // 2,3枚目が同じランク
      cards[1].rank === cards[3].rank // 2,4枚目が同じランク
    ) {
      isPair = true;
      // 2～4枚目のランクを合計
      this.#rank = Util.sum(cards[1].rank,cards[2].rank,cards[3].rank);
    }
    // 3～5枚目が同じランク
    if (
      cards[2].rank === cards[3].rank && // 3,4枚目が同じランク
      cards[2].rank === cards[4].rank // 3,5枚目が同じランク
    ) {
      isPair = true;
      // 3～5枚目のランクを合計
      this.#rank = Util.sum(cards[2].rank,cards[3].rank,cards[4].rank);
    }
    return isPair;
  };

  /**
   * ツーペアの成否を判定する
   */
  static isTwoPair = (cards) => {
    // 役の判定フラグ（true：成立、false：不成立）
    let isPair = false;
    // 1,2枚目と3,4枚目が同じランク
    if (
      cards[0].rank === cards[1].rank && // 1,2枚目が同じランク
      cards[2].rank === cards[3].rank // 3,4枚目が同じランク
    ) {
      isPair = true;
      // 1,2枚目と3,4枚目のランクを合計
      this.#rank = Util.sum(cards[0].rank,cards[1].rank,cards[2].rank,cards[3].rank);
    }
    // 1,2枚目と4,5枚目が同じランク
    else if (
      cards[0].rank === cards[1].rank && // 1,2枚目が同じランク
      cards[3].rank === cards[4].rank // 4,5枚目が同じランク
    ) {
      isPair = true;
      // 1,2枚目と4,5枚目のランクを合計
      this.#rank = Util.sum(cards[0].rank,cards[1].rank,cards[3].rank,cards[4].rank);
    }
    // 2,3枚目と4,5枚目が同じランク
    else if (
      cards[1].rank === cards[2].rank && // 2,3枚目が同じランク
      cards[3].rank === cards[4].rank // 4,5枚目が同じランク
    ) {
      isPair = true;
      // 2,3枚目と4,5枚目のランクを合計
      this.#rank = Util.sum(cards[1].rank,cards[2].rank,cards[3].rank,cards[4].rank);
    }
    return isPair;
  };

  /**
   * ワンペアの成否を判定する
   */
  static isOnePair = (cards) => {
    // 役の判定フラグ（true：成立、false：不成立）
    let isPair = false;
    // 1,2枚目が同じランク
    if (cards[0].rank === cards[1].rank) {
      isPair = true;
      // 1,2枚目のランクを合計
      this.#rank = Util.sum(cards[0].rank,cards[1].rank);
    }
    // 2,3枚目が同じランク
    else if (cards[1].rank === cards[2].rank) {
      isPair = true;
      // 2,3枚目のランクを合計
      this.#rank = Util.sum(cards[1].rank,cards[2].rank);
    }
    // 3,4枚目が同じランク
    else if (cards[2].rank === cards[3].rank) {
      isPair = true;
      // 3,4枚目のランクを合計
      this.#rank = Util.sum(cards[2].rank,cards[3].rank);
    }
    // 4,5枚目が同じランク
    else if (cards[3].rank === cards[4].rank) {
      isPair = true;
      // 4,5枚目のランクを合計
      this.#rank = Util.sum(cards[3].rank,cards[4].rank);
    }
    return isPair;
  };

  /**
   * 成立条件を満たす最も強い役を判定する
   */
  static judge = (cards) => {
    // 判定結果
    let result = null;
    //カードの配列のコピーを作成する
    const _cards = [...cards];
    // ランクが小さい順にカードをソートする
    _cards.sort((a,b) => a.rank - b.rank);

    /**
     * 役が強い順に判定する
     */
    // ロイヤルストレートフラッシュの判定
    if (this.isRoyalStraightFlush(_cards)) {
      result = {
        strength: 9,
        rank: this.#rank,
        hand: "ロイヤルストレートフラッシュ",
      };
    }
    // ストレートフラッシュの判定
    else if (this.isStraightFlush(_cards)) {
      result = {
        strength: 8,
        rank: this.#rank,
        hand: "ストレートフラッシュ",
      };
    }
    // フォーカードの判定
    else if (this.isFourCard(_cards)) {
      result = {
        strength: 7,
        rank: this.#rank,
        hand: "フォーカード",
      };
    }
    // フルハウスの判定
    else if (this.isFullHouse(_cards)) {
      result = {
        strength: 6,
        rank: this.#rank,
        hand: "フルハウス",
      };
    }
    // フラッシュの判定
    else if (this.isFlush(_cards)) {
      result = {
        strength: 5,
        rank: this.#rank,
        hand: "フラッシュ",
      };
    }
    // ストレートの判定
    else if (this.isStraight(_cards)) {
      result = {
        strength: 4,
        rank: this.#rank,
        hand: "ストレート",
      };
    }
    // スリーカードの判定
    else if (this.isThreeCard(_cards)) {
      result = {
        strength: 3,
        rank: this.#rank,
        hand: "スリーカード",
      };
    }
    // ツーペアの判定
    else if (this.isTwoPair(_cards)) {
      result = {
        strength: 2,
        rank: this.#rank,
        hand: "ツーペア",
      };
    }
    // ワンペアの判定
    else if (this.isOnePair(_cards)) {
      result = {
        strength: 1,
        rank: this.#rank,
        hand: "ワンペア",
      };
    }
    // 役が成立していない場合
    else {
      result = {
        strength: 0,
        rank: 0,
        hand: "役なし",
      };
    }
    return result;
  };
}