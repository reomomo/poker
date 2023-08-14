import Player from "./player.js";
import Com from "./com.js";
import Card from "./card.js";
import Util from "./util.js";
 /**
 * Game クラス
 */
export default class Game {
  /**
   * プロパティ
   */
  #you; // あなた（You）
  #com; // コンピューター（Com）
  #cards // 山札のカード
  #isRunning; // ゲーム実行状態（true:実行中,false:終了）

  /**
   * コンストラクタ
   */
  constructor() {
    // プロパティを初期化する
    this.#you = null;
    this.#com = null;
    this.#cards = [];
    this.#isRunning = false;
    // イベントハンドラを登録する
    this.#setupEvents();
  }
  /**
   * イベントハンドラを登録する
   */
  #setupEvents() {
    // 手札のクリックイベント
    Util.addEventListener(".card.you", "click", this.#onClickCard.bind(this));
    // Drawボタンのクリックイベント
    Util.addEventListener("#draw", "click", this.#onDraw.bind(this));
    // Replayボタンのクリックイベント
    Util.addEventListener("#replay", "click", this.#onReplay.bind(this));
  }

  /**
   * ゲームを実行する
   */
  run() {
    // ゲームの状態を初期化する
    this.#initialize();
  }

  /**
   * ゲームの状態を初期化する
   */
  #initialize() {
    this.#you = new Player(".card.you");
    this.#com = new Com(".card.com");
    this.#cards = [];
    [...Array(52)].map((_, index) => {
      // インデックス番号を持つカードを生成して山札に追加する
      this.#cards.push(new Card(index + 1));
    });
    /**
     * 山札のカードをシャッフルする
     */
    #shuffleCard() {
      // 100回繰り返す
      [...Array(100)].forEach(() => {
        // 山札から2枚のカードをランダムに選んで交換する
        const j = Math.floor(Math.random() * this.#cards.length);
        const k = Math.floor(Math.random() * this.#cards.length);
        [this.#cards[j], this.#cards[k]] = [this.#cards[k], this.#cards[j]];
      });
    };
    /**
     * 山札のカードをプレイヤーに配る
     */
    #dealCard(player, n) {
      // n回繰り返す
      [...Array(n)].map(() => {
        // 山札からカードを1枚取り出してプレイヤーに配る
        player.addCard(this.#cards.pop());
      });
    };
    this.#isRunning = true;
    /**
     * 画面の描画を更新する
     */
    #updateView() {
      // プレイヤーのカードを描画する
      this.#you.displayCard(true);
      // 相手のカードを描画する
      this.#com.displayCard(!this.#isRunning);
      // ボタンを描画する
      if (this.#isRunning) {
        document.querySelector("#replay").setAttribute("disabled", true);
        document.querySelector("#draw").removeAttribute("disabled");
        document.querySelector("#replay").removeAttribute("disabled");
        document.querySelector("#draw").setAttribute("disabled", true);
      }
    };
  }

  /**
   * 手札のクリックイベントハンドラ
   */
  #onClickCard(event) {
  }

  /**
   * Drawボタンのクリックイベントハンドラ
   */
  #onDraw(event) {
  }

  /**
   * Replayボタンのクリックイベントハンドラ
   */
  #onReplay(event) {
  }
}