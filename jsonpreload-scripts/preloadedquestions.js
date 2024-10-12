
function loadJSONQuestions()
{
	var json = parseJSON();
	
	/*
	for(const val in json)
	{
		console.log("japanese: "+val.japanese+" english "+val.english);
		addQuestionJSON(val);
	}
	*/
	
	for (let i = 0; i < json.length; i++) 
	{
		var question = createQuestionModel(json[i]);
		addQuestionJSON(question);
		addCategory(question);
	}
}

function parseJSON()
{
	//const json2 = '{"questions":{"japanese":"こにちわ","romanji":"konichiwa","english":"hello"},{"japanese":"こわいい","romanji":"kowaii","english":"scary"},{"japanese":"かこいい","romanji":"kokoii","english":"scary"}}';
	var json2 = [{"japanese":"こにちわ","romanji":"konichiwa","english":"hello","category":"word"},{"category":"word","japanese":"こわいい","romanji":"kowaii","english":"scary"},{"category":"kanji","japanese":"じゅ","romanji":"juu","english":"ten","kanji":"十"},{"category":"hiragana","japanese":"か","romanji":"ka","english":"ka"}];
	//return JSON.parse(json2);
	//return JSON.stringify(json2);
	return json2;
	
}

function addKanji()
{
	addQuestion('一','ichi','one','Kanji');
	addQuestion('二','ni','two','Kanji');
	addQuestion('三','san','three','Kanji');

	addQuestion('四','yon','four','Kanji');
	addQuestion('五','go','five','Kanji');
	addQuestion('六','roku','six','Kanji');
	addQuestion('七','nana/shichi','seven','Kanji');
	addQuestion('八','hachi','eight','Kanji');
	addQuestion('九','kyuu','nine','Kanji');
	addQuestion('十','ju','ten','Kanji');

	addQuestion('半','han','-thirty (half past the hour)','Kanji');
	addQuestion('卵','tamago','egg','Kanji');
	addQuestion('山','yama','mountain','Kanji');
	addQuestion('中','naka','inside','Kanji');
	addQuestion('肉','niku','inside','Kanji');
	addQuestion('父','chichi','dad','Kanji');
	addQuestion('母','haha','mom','Kanji'); 
	addQuestion('百','tabe','eat','Kanji'); 
	addQuestion('千','hyaku','hundred','Kanji'); 
	addQuestion('千','sen','thousand','Kanji');
	addQuestion('万','man','ten-thousand','Kanji');
	addQuestion('円','','yen','Kanji');
	addQuestion('彼 ','kare','He','Kanji');
	addQuestion('今','ima','Now','Kanji');
	addQuestion('私','watashi','I','Kanji');
	addQuestion('家 ','ie','Home','Kanji');
}

function addPhrases()
{
	addQuestion('する ','suru','To do','Phrase');
	addQuestion('です ','desu','To be','Phrase');
	addQuestion('なる','naru','To become','Phrase');
	addQuestion('ある ','aru','There is (inanimate)','Phrase');
	addQuestion('いる','iru','There is (living)','Phrase');
	addQuestion('行く ','iku','To go','Phrase');
	addQuestion('言う ','iu','To say','Phrase');
	addQuestion('見る ','miru','To see','Phrase');
	addQuestion('来る ','kuru','To come','Phrase');
	addQuestion('食べる ','taberu','To eat','Phrase');
	addQuestion('ありがとう','arigatou','Thank you','Phrase');
	addQuestion('ごめんなさい','gomen nasai','I’m Sorry','Phrase');
	addQuestion('すみません','sumimasen','Excuse me','Phrase');
	addQuestion('はじめまして','Hajimemashite','Nice to Meet You', 'Phrase')
}

function addWords()
{
	addQuestion('あぶない','abunai','dangerous','Word');
	addQuestion('あめ','ame','rain','Word');
	addQuestion('あね','ane','older sister','Word');
	addQuestion('あに','ani','older brother','Word');
	addQuestion('あの','ano','that','Word');
	addQuestion('あれ','are','that (over there)','Word');
	addQuestion('あるます','arimasu','there is','Word');
	addQuestion('あるばいと','arubaito','part time job','Word');
	addQuestion('あそこ','asoko','over there','Word');
	addQuestion('あたらし','atarashi','new','Word');
	addQuestion('あたたかい','atatakai','warm','Word');
	addQuestion('あと','ato','after','Word');
	addQuestion('べきょ','benkyo','study','Word');
	addQuestion('べんり','benri','convenience','Word');
	addQuestion('べんり','benri','convenience','Word');
	addQuestion('びじつかん','bijitsukan','art museum','Word');
	addQuestion('ちゃんと','chanto','properly','Word');
	addQuestion('ちち','chichi','dad','Word');
	addQuestion('だいじょうぶ','daijoubu','okay','Word');
	addQuestion('できます','dekimasu','can','Word');
	addQuestion('でんしゃ','densha','train','Word');
	addQuestion('でんわ','denwa','phone','Word');
	addQuestion('でんわぼんご','denwabongo','phone number','Word');
	addQuestion('どこ','doko','where','Word');
	addQuestion('どう','dou','how','Word');
	addQuestion('どうぶつえん','doubutsuen','zoo','Word');
	addQuestion('えうが','eiga','movie','Word');
	addQuestion('えき','eki','train station','Word');
	addQuestion('ふるい','furui','old','Word');
	addQuestion('がくせい','gakusei','student','Word');
	addQuestion('げんき','genki','alright','Word');
	addQuestion('じんが','ginga','shrine','Word');
	addQuestion('ごご','gogo','PM','Word');
	addQuestion('ごめん','gomen','sorry','Word');
	addQuestion('ごぜん ','gozen','AM','Word');
	addQuestion('ぐあい','guai','','Word');
	addQuestion('ぐらい','gurai','about','Word');
	addQuestion('はは','haha','mom','Word');
	addQuestion('はい','hai','yes','Word');
	addQuestion('はじめまして','hajimemashite','nice to meet you','Word');
	addQuestion('はれ','hare','sunny','Word');
	addQuestion('はしります','hashirimasu','will run','Word');
	addQuestion('へいじつ','heijitsu','weekday','Word');
	addQuestion('ひま','hima','free','Word');
	addQuestion('ひろい','hiroi','spacious','Word');
	addQuestion('ひとり','hitori','alone','Word');
	addQuestion('ほこし','hokoshi','dusty','Word');
	addQuestion('ほんだな','hondana','bookshelf','Word');
	addQuestion('ほんとに','hontoni','really?','Word');
	addQuestion('ほにゃくか','honyakuka','translator','Word');
	addQuestion('ひゃく','hyaku','hudren','Word');
	addQuestion('いい','ii','good','Word');
	addQuestion('いいえ','iie','no','Word');
	addQuestion('いきましょう','ikimashaou','should go to','Word');
	addQuestion('いきます','ikimasu','go to','Word');
	addQuestion('いくら','ikura','how much?','Word');
	addQuestion('います','imasu','there is(person or living thing)','Word');
	addQuestion('いもうと','imouto','sister','Word');
	addQuestion('いりぐち','iriguchi','entrance','Word');
	addQuestion('いつも','itsumo','always','Word');
	addQuestion('じしよ','jishyo','dictionary','Word');
	addQuestion('かばん','kaban','bag','Word');
	addQuestion('かい','kai','-floor','Word');
	addQuestion('かいさつ','kaisatsu','gate','Word');
	addQuestion('かじ','kaji','chore','Word');
	addQuestion('かかります','kakarimasu','take','Word');
	addQuestion('かんごし','kangoshi','nurse','Word');
	addQuestion('かのじょ','kanojo','girl','Word');
	addQuestion('かぞく','kazoku','family','Word');
	addQuestion('けいさつ','keisatsu','police','Word');
	addQuestion('きの','kino','yesterday','Word');
	addQuestion('きっぷ','kippu','ticket','Word');
	addQuestion('きれい','kirei','clean','Word');
	addQuestion('きょうしつ','kiyoushitsu','classroom','Word');
	addQuestion('こちら','kochira','this way','Word');
	addQuestion('こにちわ','konichiwa','hello','Word');
	addQuestion('これ','kore','this','Word');
	addQuestion('こわい','kowai','scary','Word');
	addQuestion('くこ','kuko','airport','Word');
	addQuestion('クラス','kurasu','class','Word');
	addQuestion('きょだい','kyodai','sibling','Word');
	addQuestion('きょうだい','kyoudai','sibling','Word');
	addQuestion('きゅきゅしゃ','kyukyusha','ambulance','Word');
	addQuestion('まで','made','to','Word');
	addQuestion('まど','mado','window','Word');
	addQuestion('まいあさ','maiasa','every morning','Word');
	addQuestion('まいばん','maiban','every night','Word');
	addQuestion('まいにち','mainichi','every day','Word');
	addQuestion('まいしゅ','maishu','every week','Word');
	addQuestion('まいとし','maitoshi','my friend','Word');
	addQuestion('まいつき','maitsuki','','Word');
	addQuestion('みぎかい','migikai','short','Word');
	addQuestion('みます','mimasu','watch','Word');
	addQuestion('みず','mizu','water','Word');
	addQuestion('も','mo','also','Word');
	addQuestion('もの','mono','stuff','Word');
	addQuestion('もとう','motou','','Word');
	addQuestion('なび','nabi','GPS','Word');
	addQuestion('なま','nama','raw','Word');
	addQuestion('なに','nani','what','Word');
	addQuestion('ねこ','neko','cat','Word');
	addQuestion('にほんご','nihongo','japanese','Word');
	addQuestion('のみます','nomimasu','drinking','Word');
	addQuestion('のります ','norimasu','ride','Word');
	addQuestion('おちゃ','ocha','green tea','Word');
	addQuestion('おかさん','okasan','mom','Word');
	addQuestion('おかし','okashi','snack','Word');
	addQuestion('おき','oki','wake ','Word');
	addQuestion('おねがい','onegai','please','Word');
	addQuestion('おおき','ooki','big','Word');
	addQuestion('おとな ','otona','adult','Word');
	addQuestion('おとさん','otosan','dad','Word');
	addQuestion('おととい','ototoi','day before yesterday','Word');
	addQuestion('およぎます','oyogimasu','swimming','Word');
	addQuestion('らいげつ','raigetsu','next month','Word');
	addQuestion('らいしゅ','raishu','next week','Word');
	addQuestion('りょこう','riyoko','trip','Word');
	addQuestion('せんこ','senko','major','Word');
	addQuestion('せんたかき','sentakaki','','Word');
	addQuestion('しゃしん','shashin','photo','Word');
	addQuestion('しゃしにゃ','shashinya','photographer','Word');
	addQuestion('しくだい','shikudai','homework','Word');
	addQuestion('します','shimasu','to do','Word');
	addQuestion('しめきり','shimekiri','deadline','Word');
	addQuestion('しゅみ','shumi','hobby','Word');
	addQuestion('それ','sore','that','Word');
	addQuestion('すい','sui','water','Word');
	addQuestion('すき','suki','like','Word');
	addQuestion('すんだえ','sundae','live in','Word');
	addQuestion('すてき','suteki','lovely','Word');
	addQuestion('たべます','tabemasu','to eat','Word');
	addQuestion('たくさん','takusan','alot ','Word');
	addQuestion('てんき','tenki','weather','Word');
	addQuestion('てつだい','tetsudai','help','Word');
	addQuestion('とえ','toei','far','Word');
	addQuestion('ときどき','tokidoki','sometines','Word');
	addQuestion('ともだち','tomodachi','friend','Word');
	addQuestion('とります','torimasu','will take','Word');
	addQuestion('とし','toshi','year','Word');
	addQuestion('としかん','toshokan','library','Word');
	addQuestion('つぎ','tsugi','next','Word');
	addQuestion('すこし','sukoshi','a bit','Word');
	addQuestion('すみません','tsumimasen','excuse me','Word');
	addQuestion('うんてんしゅ','untenshu','driver','Word');
	addQuestion('あたし','watashi','I','Word');
	addQuestion('やすみます','yasumimasu','rest','Word');
	addQuestion('よく','yoku','often','Word');
	addQuestion('ゆき','yuki','snow','Word');
	addQuestion('ゆめい','yumei','famous','Word');
	addQuestion('こども','kodomo','child','Word');
	addQuestion('あおい ','Aoi','blue','Word');
	addQuestion('あかい','akai','red','Word');
	addQuestion('あき','aki','fall','Word');
	addQuestion('あさごはん','asagohan','breakfast','Word');
	addQuestion('ばんごはん','bangohan','dinner','Word');
	addQuestion('ひるごはん','hirugohan','lunch','Word');
	addQuestion('ごはん','gohan','rice/meal','Word');
	addQuestion('あした','ashita','tomorrow','Word');
	addQuestion('あたまがいい','atamagaii','smart','Word');
	addQuestion('あまい','amai','sweet','Word');
	addQuestion('いしゃ','isha','doctor','Word');
	addQuestion('いま','ima ','now','Word');
	addQuestion('いろいろ','iroiro','all kinds of','Word');
	addQuestion('うみ','umi','beach','Word');
	addQuestion('うるさい','urusai','noisy','Word');
	addQuestion('え','e','painting','Word');
	addQuestion('えいご','eigo','english','Word');
	addQuestion('ふらんすご','fransugo','french','Word');
	addQuestion('にほんご','nihongo','japanese','Word');
	addQuestion('にほんじん','nihonjin','japanese person','Word');
	addQuestion('おいしい','oishii','tastey','Word');
	addQuestion('おっと','otto','my husband','Word');
	addQuestion('つま','tsuma','my wife','Word');
	addQuestion('かお','kao','face','Word');
	addQuestion('きいろい','kiiroi','yellow','Word');
	addQuestion('しつもん','shitsumon','question','Word');
	addQuestion('しゃっぱい','shyoupai','salty','Word');
	addQuestion('しお','shio','salt','Word');
	addQuestion('さかな','sakana','fish','Word');
	addQuestion('こども','kodomo ','child','Word');
	addQuestion('ききましょう','kikimashou','lets listen to','Word');
	addQuestion('いりぐち','iriguchi','entrance','Word');
	addQuestion('つかいます','tsukaimasu','use','Word');
	addQuestion('うんてんします','untenshimasu','drive','Word');
	addQuestion('セール','seru','sale','Word');
	addQuestion('はなします','hanashi','talking','Word');
	addQuestion('あにそん','anisong','anime music','Word');
	addQuestion('バンド','bando','band','Word');
	addQuestion('パズル','pazuru','puzzle','Word');
	addQuestion('むずかし','muzukashi','difficult','Word');
	addQuestion('はいゆう','haiyuu','actor','Word');
	addQuestion('なんかい','nankai','which floor','Word');
	addQuestion('うけつけ','uketsuke','front desk','Word');
	addQuestion('フライドポテト','furaidopoteto','french fries','Word');
	addQuestion('チャーハン','chahan','fried rice','Word');
	addQuestion('しょくどう','shokudo','cafeteria','Word');
	addQuestion('パソコン','pasocon','computer','Word');
	addQuestion('がっき','gakki','instrument','Word');
	addQuestion('ピアノ','piano','piano','Word');
	addQuestion('ひらがな','hiragana','hiragana','Word');
	addQuestion('おかね','okane','money','Word');
	addQuestion('おふろ','ofuro','bath','Word');
	addQuestion('きょかしよ','kyokashiyo','text book','Word');
	addQuestion('こんしゅ','konshu','this week','Word');
	addQuestion('しみんびょういん。','shiminbyoin','municiple hospital','Word');
	addQuestion('シャワー','showa','shower','Word');
	addQuestion('すぎ','sugi','next','Word');
	addQuestion('でんき','denki','electricity','Word');
	addQuestion('でんしゃ','densha','train','Word');
	addQuestion('にもす','nimotsu','baggage','Word');
	addQuestion('パソコン。','pasocon','personal computer','Word');
	addQuestion('ページ','pagi','page','Word');
	addQuestion('まど','mado','window','Word');
	addQuestion('よる','yoru','night','Word');
	addQuestion('らいしょう','raishu','next week','Word');
	addQuestion('らいねん','raihen','next year','Word');
	addQuestion('たいへん。','taihen','hard','Word');
	addQuestion('あそぶ','asobu','play','Word');
	addQuestion('いそぐ','isogu','hurry','Word');
	addQuestion('おふろにはいる','ofuronihairu','to take a bath','Word');
	addQuestion('すわる','suwaru','to sit down','Word');
	addQuestion('たつ','tatsu','to stand up','Word');
	addQuestion('かえす','kaesu','to return','Word');
	addQuestion('けす','keisu','turn off','Word');
	addQuestion('しね','shine','to die','Word');
	addQuestion('たばこおすう','tabakooshu','to smoke','Word');
	addQuestion('つかう','tsukau','to use','Word');
	addQuestion('てつだう','tetsudau','to help','Word');
	addQuestion('はいる','hairu','enter','Word');
	addQuestion('もつ','motsu','carry/hold','Word');
	addQuestion('やすめ','yasumu','absent/rest','Word');
	addQuestion('あける','akeiru','open','Word');
	addQuestion('おしえる','oshieru','teach/instruct','Word');
	addQuestion('おりる','oriru','to get off','Word');
	addQuestion('かりる','kariru','to borrow','Word');
	addQuestion('しめる','shimeru','to close','Word');
	addQuestion('シャワーをあびる','showaoabiru','to take a shower','Word');
	addQuestion('つける','tsukeru','to turn on','Word');
	addQuestion('でんわおかける','denwaokakeru','to make a call','Word');
	addQuestion('わすれる','wasureru','to forget','Word');
	addQuestion('つれてくる','tsuretekuru','to bring (a person)','Word');
	addQuestion('もってくる','motsutekuru','to bring (a thing)','Word');
	addQuestion('あとで','atode','later on','Word');
	addQuestion('あそく','asoku','do something (later)','Word');
	addQuestion('から','kara','because','Word');
	addQuestion('けっこうで','kekkoudesu','that would be fine','Word');
	addQuestion('すぐ','sugu','right away','Word');
	addQuestion('ほんとうですか','hontoudesuka','really','Word');
	addQuestion('ゆっくる','yukkuru','slowly; leisurely','Word');
}