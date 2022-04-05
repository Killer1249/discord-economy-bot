export const locale = "ja-GT";
export const localeName = "日本 (Google Translated)";
export const credits = "MacabreOverlord";

export const STRINGS = {
    _NO_LOCALE: (key: string) => `エラー: ${key} 存在しないようです。`,
    GENERIC_ERROR: "予期しないことが発生しました。 後でもう一度やり直してください。",
    ACCOUNT_ALREADY_EXISTS: "あなたはすでにアカウントを持っています！",
    ACCOUNT_DOES_NOT_EXIST: "あなたはアカウントを持っていません！",
    ACCOUNT_CANNOT_CREATE: "アカウントを作成できませんでした。 後でもう一度やり直してください。",
    ACCOUNT_CANNOT_RETRIEVE: "このアカウントは存在しません！",
    BALANCE_CANNOT_RETRIEVE: "表示するバランスはありません。",
    COOLDOWN: (cooldown: number, unit: string) => `でもう一度やり直してください ${cooldown/60000} ${unit}!`,
    COOLDOWN_MINUTES: "分",
    COOLDOWN_SECONDS: "秒",
    INPUT_INVALID_AMOUNT: "有効な金額を入力してください！",
    SUPPLY_WILL_BE_EXCEEDED: "最大供給量に達しました！",
    TRANSACTION_AMOUNT_INVALID: "あなたは十分な通貨を持っていません！",
    TRANSACTION_CANNOT_TRANSFER_TO_SELF: "あなたは自分自身に移ることはできません！",
    TRANSACTION_CANNOT_SEND_ZERO: "何も送れません！",
    LEADERBOARD_CANNOT_HAVE_MULTIPLE: "複数のリーダーボードを開いてはいけません！",
    TRANSACTION_LIST_CANNOT_HAVE_MULTIPLE: "複数のトランザクションリストを開いてはいけません！",
    TRANSACTION_VIEW_CANNOT_RETRIEVE: "このトランザクションは存在しません！",
    LOCALE_DOES_NOT_EXIST: "選択したロケールが存在しません！",

    ACCOUNT_CREATED: "あなたのアカウントが作成されました！",
    ACCOUNT_RETURN_BALANCE: (calculated: string) => `アカウントの残高は ${calculated}.`,
    ACCOUNT_RETURN_BALANCE_OTHER_USER: (parsed: string, calculated: any) => `${parsed} もっている ${calculated}.`,
    CONVERT_AMOUNT_IS: (amount: string, calculated: string) => `${amount} は ${calculated}.`,
    INFO_DESC: (coinName: string) => `交換と転送 ${coinName}!`,
    INFO_MAX_SUPPLY_LABEL: "最大供給",
    INFO_EXCHANGE_RATE_LABEL: "為替レート",
    INFO_EXCHANGE_RATE_VALUE: (ticker: string, exchangeRate: string, currency: string, calculatedExchange: string) => 
        `1 ${ticker} ために ${exchangeRate} ${currency}.\n1 ${currency} ために ${calculatedExchange}`,
    INFO_CURRENT_SUPPLY_LABEL: "電流供給",
    INFO_BLOCK_REWARD_LABEL: "ブロック報酬",
    INFO_AMOUNT_MINED_LABEL: "採掘量",
    INFO_AMOUNT_MINED_VALUE: (amountMined: number) => `${amountMined}% 最大供給量`,
    INFO_MARKET_CAP_LABEL: "時価総額",
    INFO_FULLY_DILUTED_MARKET_CAP_LABEL: "完全に希釈された時価総額",
    INFO_TX_FEE_LABEL: "トランザクション (TX) 料金",
    INFO_DATA_LABEL: "データ",
    LEADERBOARD_TITLE: "リーダーボード",
    LEADERBOARD_DESC: "グローバルリッチリスト(1〜10を表示)",
    LEADERBOARD_DESC_FORWARD: (index: number, to: number) => `グローバルリッチリスト（表示中 ${index + 2}-${to + 1})`,
    LEADERBOARD_DESC_BACK: (to: number) => `グローバルリッチリスト（表示中 ${to + 1}-${to + 10})`,
    LEADERBOARD_VALUE: (value: string) => `${value} 総供給の。`,
    TRANSACTION_LIST_TITLE: "トランザクションリスト",
    TRANSACTION_LIST_DESC: "最近の取引のリスト (1-10を表示)",
    TRANSACTION_LIST_DESC_FORWARD: (index: number, to: number) => `最近の取引のリスト（表示中 ${index + 2}-${to + 1})`,
    TRANSACTION_LIST_DESC_BACK: (to: number) => `最近の取引のリスト（表示中 ${to + 1}-${to + 10})`,
    TRANSACTION_VIEW_TITLE: (txid: string) => `表示 ${txid}`,
    TRANSACTION_VIEW_DESC: "トランザクションを表示します。",
    TRANSACTION_VIEW_INDEX_LABEL: "索引",
    TRANSACTION_VIEW_SENDER_LABEL: "送信者",
    TRANSACTION_VIEW_RECIPIENT_LABEL: "受信者",
    TRANSACTION_VIEW_AMOUNT_SENT_LABEL: "送信金額",
    TRANSACTION_VIEW_TIMESTAMP_LABEL: "タイムスタンプ",
    TRANSACTION_VIEW_TX_FEE_LABEL: "取引料金",
    TRANSACTION_VIEW_PREV_HASH_LABEL: "以前のハッシュ",
    TRANSACTION_SUCCESS: "トランザクションは成功しました。",
    SUCCESSFULLY_MINED: (blockReward: number, ticker: string, parsedFees: number) => 
        `あなたは ${blockReward} ${ticker} 砂と ${parsedFees} の TX 料金の報酬のためにブロックを破壊することに成功しました。`,
    LOCALE_CHANGED: "ロケールが正常に変更されました。",
    CURRENT_LOCALE: (localeName: string, locale: string) => `現在のロケールはに設定されています ${localeName} (${locale}).`,
}