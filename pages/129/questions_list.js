const questions = [
    {
        question:
            "中国共产党第一次全国代表大会于1921年在上海和浙江嘉兴召开，会议选举了（ ）任书记。",
        choices: [
            { text: "陈独秀", value: "A" },
            { text: "李大钊", value: "B" },
        ],
        correct: "A",
    },
    {
        question:
            "“一五”计划，是指我国从1953年到1957年发展国民经济的计划。它是在党中央的直接领导下，由（ ）、（ ）同志主持制定的。",
        choices: [
            { text: "周恩来 陈云", value: "A" },
            { text: "毛泽东 周恩来", value: "B" },
        ],
        correct: "A",
    },
    {
        question:
            "全国人大常委会会议12月30日表决通过了关于召开十四届全国人大一次会议的决定。根据决定，十四届全国人大一次会议于2023年3月5日在北京召开。政协第十三届全国委员会召开主席会议，建议全国政协十四届一次会议于2023年3月4日在北京召开，请问两会的全称是?	",
        choices: [
            {
                text: "中华人民共和国全国人民代表大会和中国人民政治协商会议",
                value: "A",
            },
            { text: "中华人民共和国全国人民代表大会和全国人民政治协商会议", value: "B" },
        ],
        correct: "A",
    },
    {
        question:
            "2022 年 10 月 16 日，习近平在中国共产党第二十次全国代表大会上的报告指出，我们深入推进全面从严治党，坚持打铁必须自身硬，提出和落实新时代（   ）总要求。",
        choices: [
            { text: "党的政治建设", value: "A" },
            { text: "党的建设", value: "B" },
        ],
        correct: "B",
    },
    {
        question:
            "2022 年 10 月 16 日，习近平在中国共产党第二十次全国代表大会上的报告指出，拥有马克思主义科学理论指导是我们党（    ）的根本所在。",
        choices: [
            { text: "坚定信仰信念、把握历史主动", value: "A" },
            { text: "坚定信仰信念、把握发展规律", value: "B" },
        ],
        correct: "A",
    },
    {
        question:
            "1928年6月18日至7月11日，中国共产党第六次全国代表大会在（ ）召开。",
        choices: [
            { text: "莫斯科", value: "A" },
            { text: "上海", value: "B" },
        ],
        correct: "A",
    },
    {
        question:
            "抗战时期清华、北大和南开南迁昆明组成西南联大，在极度艰苦的条件下仍弦歌不辍，创造了战时高等教育的奇迹。请问下面歌词中描写西南联大的是哪一句？",
        choices: [
            {
                text: "千秋耻，终当雪，中业兴，继往烈。",
                value: "A",
            },
            {
                text: "西山苍苍，东海茫茫，吾校庄严，巍然中央。",
                value: "B",
            },
        ],
        correct: "A",
    },
    {
        question:
            "中国从1953年开始制定第一个“五年计划”。从（）起，“五年计划”改为“五年规划”。",
        choices: [
            { text: "十一五", value: "A" },
            { text: "十三五", value: "B" },
        ],
        correct: "A",
    },
    {
        question:
            "十四五规划强调“坚持（）在我国现代化建设全局中的核心地位。",
        choices: [
            { text: "创新", value: "A" },
            { text: "发展", value: "B" },
        ],
        correct: "A",
    },
    {
        question:
            "党的四大最重要的贡献是第一次明确提出了无产阶级在（ ）革命中的领导权和（ ）问题。",
        choices: [
            { text: "民主 工农联盟", value: "A" },
            { text: "社会主义 资产阶级", value: "B" },
        ],
        correct: "A",
    },
    {
        question:
            "1949年3月,党的七届二中全会在河北西柏坡召开。会议着重讨论了党的工作重心的战略转移,即（）的问题。",
        choices: [
            { text: "从乡村转移到城市", value: "A" },
            {
                text: "从新民主主义社会转变到社会主义社会",
                value: "B",
            },
        ],
        correct: "A",
    },
    {
        question:
            "我国历史上的社会主义“过渡时期”是指（）建国到抗美援朝胜利。",
        choices: [
            { text: "全国解放到社会主义改造基本完成", value: "A" },
            { text: "建国到社会主义改造基本完成", value: "B" },
        ],
        correct: "B",
    },
    {
        question:
            "1960年代初，我国为进行经济恢复和建设，实施（）的工作方针",
        choices: [
            { text: "“调整，巩固，充实，提高”", value: "A" },
            { text: "“一体两翼，一化三改”", value: "B" },
        ],
        correct: "A",
    },
    {
        question:
            "1972年，时任美国总统尼克松访问中国，以下哪项为此次访问直接达成的结果：",
        choices: [
            {
                text: "推动美国乒乓球队访华，开启中美两国的民众交流",
                value: "A",
            },
            { text: "两国签署《上海公报》", value: "B" },
        ],
        correct: "B",
    },
    {
        question: "党的十四大明确了我国经济改革的目标是：",
        choices: [
            { text: "建立社会主义市场经济体制", value: "A" },
            {
                text: "建立以公有制为主体，多种所有制经济共同发展的混合所有制",
                value: "B",
            },
        ],
        correct: "A",
    },
    {
        question:
            "党的二十届二中全会审议通过了《党和国家机构改革方案》，同意将其中涉及国务院机构改革的内容提交______________审议。",
        choices: [
            { text: "第十四届政治协商会议第一次会议", value: "A" },
            {
                text: "第十四届全国人民代表大会第一次会议",
                value: "B",
            },
        ],
        correct: "B",
    },
    {
        question:
            "党的二大的主要功绩是，在中国近代史上第一次明确地提出了（ ）的民主革命纲领。",
        choices: [
            { text: "反帝反封建", value: "A" },
            {
                text: "农村包围城市，武装夺取政权",
                value: "B",
            },
        ],
        correct: "A",
    },
    {
        question:
            "“一国两制”的根本宗旨是维护国家主权、安全、发展利益，保持香港、澳门长期繁荣稳定；____是“一国两制”方针的最高原则。",
        choices: [
            { text: "维护国家主权、安全、发展利益", value: "A" },
            {
                text: "保持香港、澳门长期繁荣稳定",
                value: "B",
            },
        ],
        correct: "A",
    },
    {
        question:
            "党的十八大以来，以习近平同志为核心的党中央把粮食安全作为治国理政的头等大事，提出确保____的新粮食安全观，牢牢把住粮食安全主动权，带领亿万人民走出了一条中国特色粮食安全之路。",
        choices: [
            { text: "谷物完全自给、口粮基本安全", value: "A" },
            {
                text: "谷物基本自给、口粮绝对安全",
                value: "B",
            },
        ],
        correct: "B",
    },
    {
        question:
            "据新华社2022年8月18日报道，中共中央总书记、国家主席、中央军委主席习近平近日在辽宁考察时指出，小康梦、强国梦、中国梦，归根到底是老百姓的____。中国共产党的一切奋斗都是____。",
        choices: [
            { text: "“幸福梦” 为民族谋复兴", value: "A" },
            {
                text: "“幸福梦” 为人民谋幸福",
                value: "B",
            },
        ],
        correct: "B",
    },
    {
        question:
            "据新华社2022年8月18日报道，中共中央总书记、国家主席、中央军委主席习近平近日在辽宁考察时强调，党中央实施创新驱动发展战略，格外重视____，格外重视____，努力提升我国产业水平和实力，推动我国从经济大国向经济强国、制造强国转变。",
        choices: [
            { text: "自主创新 创新环境建设", value: "A" },
            {
                text: "制度创新 创新环境建设",
                value: "B",
            },
        ],
        correct: "A",
    },
    {
        question:
            "________是中国革命具有决定意义的新起点。毛泽东同志领导军民在井冈山建立第一个农村革命根据地，党领导人民打土豪、分田地。",
        choices: [
            { text: "从进攻大城市转为向农村进军", value: "A" },
            {
                text: "中国共产党成立",
                value: "B",
            },
        ],
        correct: "A",
    },
    {
        question:
            "一九五四年，召开第一届全国人民代表大会第一次会议，通过了__________。",
        choices: [
            {
                text: "《中国人民政治协商会议共同纲领》",
                value: "A",
            },
            {
                text: "《中华人民共和国宪法》",
                value: "B",
            },
        ],
        correct: "B",
    },
    {
        question:
            "党坚持独立自主的和平外交政策，倡导和坚持和平共处五项原则，坚定维护国家独立、主权、尊严，支持和援助世界被压迫民族解放事业、新独立国家建设事业和各国人民正义斗争，反对_____________，彻底结束了旧中国的屈辱外交。",
        choices: [
            {
                text: "帝国主义、封建主义、官僚资本主义",
                value: "A",
            },
            {
                text: "帝国主义、霸权主义、殖民主义、种族主义",
                value: "B",
            },
        ],
        correct: "B",
    },
    {
        question:
            "改革开放以后，我国人民生活显著改善，社会治理明显改进。同时，随着时代发展和社会进步，人民对美好生活的向往更加强烈，对民主、法治、公平、正义、安全、环境等方面的要求日益增长。党中央强调，___________就是我们的奋斗目标。",
        choices: [
            { text: "人民对美好生活的向往", value: "A" },
            {
                text: "增进民生福祉",
                value: "B",
            },
        ],
        correct: "A",
    },

    // 判断题
    {
        question:
            "毛泽东在党的七大明确地提出了“马克思主义的中国化”命题。",
        choices: [
            { text: "正确", value: "A" },
            { text: "错误", value: "B",},
        ],
        correct: "B",
    },
    {
        question:
            "我国现行的宪法是1983年颁布实施的。",
        choices: [
            { text: "正确", value: "A" },
            { text: "错误", value: "B",},
        ],
        correct: "B",
    },
    {
        question:
            "“第二个历史决议”是指1981年6月十一届六中全会通过的《关于若干历史问题的决议》。",
        choices: [
            { text: "正确", value: "A" },
            { text: "错误", value: "B",},
        ],
        correct: "B",
    },
    {
        question:
            "党的三大之后，在中国共产党的推动下，孙中山先生对国民党进行了改组，确定了联俄、联共、扶助农工的三大政策，召开了国共合作的国民党第一次全国代表大会，第一次国共合作正式建立。",
        choices: [
            { text: "正确", value: "A" },
            { text: "错误", value: "B",},
        ],
        correct: "A",
    },
    {
        question:
            "在革命斗争中，党形成理论联系实际、密切联系群众、批评和自我批评三大法宝。",
        choices: [
            { text: "正确", value: "A" },
            { text: "错误", value: "B",},
        ],
        correct: "B",
    },
    {
        question:
            "在革命斗争中，党坚持统一战线、武装斗争、党的建设三大优良作风。",
        choices: [
            { text: "正确", value: "A" },
            { text: "错误", value: "B",},
        ],
        correct: "B",
    },
    {
        question:
            "党中央提出，如今我国经济发展进入新常态，已由高速增长阶段转向高质量发展阶段，面临增长速度换挡期、结构调整阵痛期、前期刺激政策消化期“三期叠加”的复杂局面，传统发展模式难以为继。",
        choices: [
            { text: "正确", value: "A" },
            { text: "错误", value: "B",},
        ],
        correct: "A",
    },
    {
        question:
            "党中央强调，理想信念是共产党人精神上的“钙”，共产党人如果没有理想信念，精神上就会“缺钙”，就会得“软骨病”，必然导致政治上变质、经济上贪婪、道德上堕落、生活上腐化。",
        choices: [
            { text: "正确", value: "A" },
            { text: "错误", value: "B",},
        ],
        correct: "A",
    },
    {
        question:
            "贯彻新发展理念，建设现代化经济体系，必须坚持质量第一、效益优先，以供给侧结构性改革为主线。",
        choices: [
            { text: "正确", value: "A" },
            { text: "错误", value: "B",},
        ],
        correct: "A",
    },
    {
        question:
            "建设现代化经济体系，必须把发展经济的着力点放在虚拟经济上，把提高供给体系质量作为主攻方向，显著增强我国经济质量优势。",
        choices: [
            { text: "正确", value: "A" },
            { text: "错误", value: "B",},
        ],
        correct: "B",
    },
    {
        question:
            "中国共产党在中共六大第一次把毛泽东思想作为党的指导思想载入党章。",
        choices: [
            { text: "正确", value: "A" },
            { text: "错误", value: "B",},
        ],
        correct: "B",
    },
    {
        question:
            "党的十三届六中全会明确指出：“我国经济体制改革的目标是建立社会主义市场经济体制”。",
        choices: [
            { text: "正确", value: "A" },
            { text: "错误", value: "B",},
        ],
        correct: "B",
    },
    {
        question:
            "毛泽东在《星星之火，可以燎原》中提出中国革命“以乡村为中心”思想。",
        choices: [
            { text: "正确", value: "A" },
            { text: "错误", value: "B",},
        ],
        correct: "A",
    },
    {
        question:
            "第一次提出“建设有中国特色的社会主义理论”这一概念是在党的十一届三中全会。",
        choices: [
            { text: "正确", value: "A" },
            { text: "错误", value: "B",},
        ],
        correct: "B",
    },
    {
        question:
            "1949年中华人民共和国成立后，第一个承认新中国的西方国家是英国，第一个与新中国建立大使级外交关系的西方国家是瑞典。",
        choices: [
            { text: "正确", value: "A" },
            { text: "错误", value: "B",},
        ],
        correct: "A",
    },
    {
        question:
            "1988年9月5日邓小平在会见捷克斯洛伐克总统胡萨克时，提出了“一国两制”的著名论断。",
        choices: [
            { text: "正确", value: "A" },
            { text: "错误", value: "B",},
        ],
        correct: "B",
    },
    {
        question:
            "发展经济的根本目的是提高全国人民的生活水平和质量。",
        choices: [
            { text: "正确", value: "A" },
            { text: "错误", value: "B",},
        ],
        correct: "A",
    },
    {
        question:
            "2019 年 9 月 20 日，习近平在中央政协工作会议暨庆祝中国人民政治协商会议成立 70 周年大会上的讲话中，提出了新时代加强和改进人民政协工作的总体要求，指出新时代做好人民政协工作的中心环节是加强思想政治引领，广泛凝聚共识。",
        choices: [
            { text: "正确", value: "A" },
            { text: "错误", value: "B",},
        ],
        correct: "A",
    },
    {
        question:
            "近代以来中华民族面临着争取民族独立、人民解放和实现国家富强、人民富裕两大历史任务。近代中国的历史表明,要争得民族独立和人民解放,必须首先进行反帝反封建的民主革命。",
        choices: [
            { text: "正确", value: "A" },
            { text: "错误", value: "B",},
        ],
        correct: "A",
    },
    {
        question:
            "马克思出生于布鲁塞尔。",
        choices: [
            { text: "正确", value: "A" },
            { text: "错误", value: "B",},
        ],
        correct: "B",
    },
    {
        question:
            "社会主义民主政治的本质是人民民主专政。",
        choices: [
            { text: "正确", value: "A" },
            { text: "错误", value: "B",},
        ],
        correct: "B",
    },
    {
        question:
            "社会主义道德的核心和集中体现是为人民服务。",
        choices: [
            { text: "正确", value: "A" },
            { text: "错误", value: "B",},
        ],
        correct: "A",
    },
    {
        question:
            "社会主义民主政治的本质是无产阶级政党的领导。",
        choices: [
            { text: "正确", value: "A" },
            { text: "错误", value: "B",},
        ],
        correct: "B",
    },
    {
        question:
            "党执政后的最大危险是腐败。",
        choices: [
            { text: "正确", value: "A" },
            { text: "错误", value: "B",},
        ],
        correct: "B",
    },
    {
        question:
            "无产阶级政党的第一个党纲是《共产党宣言》。",
        choices: [
            { text: "正确", value: "A" },
            { text: "错误", value: "B",},
        ],
        correct: "A",
    },

    // 一二·九运动相关题目（20）
    {
        question:
            "一二·九运动是为了（）",
        choices: [
            { text: "反对封建军阀", value: "A" },
            { text: "抗日救国", value: "B",},
        ],
        correct: "B",
    },
    {
        question:
            "一二·九运动最先在（）爆发，然后迅速扩展至全国。",
        choices: [
            { text: "北平", value: "A" },
            { text: "上海", value: "B",},
        ],
        correct: "A",
    },
    {
        question:
            "一二·九运动是在（）的领导下展开的。",
        choices: [
            { text: "中国共产党", value: "A" },
            { text: "全国学联", value: "B",},
        ],
        correct: "A",
    },
    {
        question:
            "一二·九运动爆发于（）年。",
        choices: [
            { text: "1935", value: "A" },
            { text: "1936", value: "B",},
        ],
        correct: "A",
    },
    {
        question:
            "刘少奇在延安青年纪念“一二·九”运动大会上的讲话中曾指出，“一二·九”运动是划分中国  ____  的一个标志。",
        choices: [
            { text: "反动时期与革命时期", value: "A" },
            { text: "旧民主主义革命时期与新民主主义革命时期", value: "B",},
        ],
        correct: "A",
    },
    {
        question: "一二·九运动在历史上讲，是准备____的一个非常重要的方面，",
        choices: [
            { text: "百团大战", value: "A" },
            { text: "抗日战争", value: "B" },
        ],
        correct: "B",
    },
    {
        question: "1935年，党领导了“一二·九”学生运动，掀起了要求____的强大群众斗争，",
        choices: [
            { text: "停止内战、抗日救亡", value: "A" },
            { text: "打倒国民党", value: "B" },
        ],
        correct: "A",
    },
    {
        question: "1935年12月14日 北平市长____邀各校学生代表举行茶话会，力劝学生即日复课，“勿作轨外行动”，“顾及华北现在环境，勿因言语引起对外纠纷”，",
        choices: [
            { text: "秦德纯", value: "A" },
            { text: "张发奎", value: "B" },
        ],
        correct: "A",
    },
    {
        question: "九一八事变后，日本帝国主义进一步发动华北事变，企图使____五省脱离中国，由日本控制。在这个历史背景下，中国共产党领导了“一二·九”学生抗日救亡爱国运动，",
        choices: [
            { text: "冀、鲁、晋、察、黑", value: "A" },
            { text: "冀、鲁、晋、察、绥", value: "B" },
        ],
        correct: "B",
    },
    {
        question: "1935年12月18日，中华全国总工会发表____，号召全国各业、各厂的男女工友起来召集群众会议，发表宣言和通电，抗议汉奸卖国贼出卖华北与屠杀、逮捕爱国学生，支持一二·九学生运动，",
        choices: [
            { text: "《自卫抗战声明书》", value: "A" },
            { text: "《为援助北平学生救国运动告工友书》", value: "B" },
        ],
        correct: "B",
    },
    {
        question: "在一二·九运动中，北平各大中学校发表联合宣言，宣布自____起举行总罢课。提出罢课的具体目标是:一、誓死反对分割我国领土主权的傀儡组织；二、反对投降外交；三、要求动员全国抗日；四、争取救国自由。呼吁全国各界立即响应，一致行动。要求当局立即释放被捕学生，撤回封锁各校的军警，",
        choices: [
            { text: "12月9日", value: "A" },
            { text: "12月10日", value: "B" },
        ],
        correct: "B",
    },
    {
        question: "1935年“一二·九”运动爆发时，北平学联总部设在（），",
        choices: [
            { text: "清华园", value: "A" },
            { text: "燕京大学", value: "B" },
        ],
        correct: "A",
    },
    {
        question: "“华北之大，已经安放不得一张平静的书桌了！”这句震撼人心的话出自（），",
        choices: [
            { text: "蒋南翔起草的《告全国民众书》", value: "A" },
            { text: "清华学生自治会宣言", value: "B" },
        ],
        correct: "A",
    },
    {
        question: "在“一二·一六”示威中，勇敢爬进宣武门并被美国记者誉为中国“贞德”的清华女学生是，",
        choices: [
            { text: "陆璀", value: "A" },
            { text: "郭明秋", value: "B" },
        ],
        correct: "A",
    },
    {
        question: "1935年12月9日，清华等学校学生游行队伍首先前往，",
        choices: [
            { text: "西直门", value: "A" },
            { text: "东直门", value: "B" },
        ],
        correct: "A",
    },
    {
        question: "“一二·九”运动后，北平各校学生采取的首要行动是，",
        choices: [
            { text: "实行总罢课", value: "A" },
            { text: "继续游行示威", value: "B" },
        ],
        correct: "A",
    },
    {
        question: "在中共中央1935年11月发布的《关于青年工作的决定》的精神指引下，中共北平市委书记林枫与姚依林等人在“清华同学会”举行会议，决定成立，",
        choices: [
            { text: "“南下扩大宣传团”", value: "A" },
            { text: "“民族解放先锋队”", value: "B" },
        ],
        correct: "B",
    },
    {
        question: "“一二·九”运动爆发的直接背景是，",
        choices: [
            { text: "日本提出“华北特殊化”，加紧侵占华北", value: "A" },
            { text: "日军占领东北三省", value: "B" },
        ],
        correct: "A",
    },
    {
        question: "“一二·九”运动得到的国际响应包括，",
        choices: [
            { text: "国际学生联合会的声援", value: "A" },
            { text: "国际联盟的介入", value: "B" },
        ],
        correct: "A",
    },
    {
        question: "清华学生在“一二·九”运动后开展的重要活动是，",
        choices: [
            { text: "组织南下宣传团到农村进行抗日宣传", value: "A" },
            { text: "参与武装起义", value: "B" },
        ],
        correct: "A",
    },
    {
        question: "中国特色社会主义事业总体布局的五位一体不包括：",
        choices: [
            { text: "军事建设", value: "A" },
            { text: "生态文明建设", value: "B" },
        ],
        correct: "A",
    },
    {
        question: "新发展理念不包括：",
        choices: [
            { text: "协调", value: "A" },
            { text: "快速", value: "B" },
        ],
        correct: "B",
    },
    {
        question: "全面从严治党不包括以下哪个建设：",
        choices: [
            { text: "政治建设", value: "A" },
            { text: "文化建设", value: "B" },
        ],
        correct: "B",
    },
    {
        question: "坚持和完善社会主义基本经济制度不包括：",
        choices: [
            { text: "使市场在资源配置中起决定性作用", value: "A" },
            { text: "大力发展制造业", value: "B" },
        ],
        correct: "B",
    },
    {
        question: "习近平指出我国哲学社会科学的一项重要任务就是继续推进马克思主义三化，其中不包括：",
        choices: [
            { text: "大众化", value: "A" },
            { text: "深刻化", value: "B" },
        ],
        correct: "B",
    },
    {
        question: "中国特色社会主义事业战略布局不包括：",
        choices: [
            { text: "全面建设小康", value: "A" },
            { text: "全面深化改革", value: "B" },
        ],
        correct: "A",
    },
    {
        question: "以下哪项不属于六个坚持：",
        choices: [
            { text: "坚持实地考察", value: "A" },
            { text: "坚持胸怀天下", value: "B" },
        ],
        correct: "A",
    },
    {
        question: "（ ）是实现社会主义现代化、创造人民美好生活的必由之路：",
        choices: [
            { text: "中国特色社会主义道路", value: "A" },
            { text: "中国特色社会主义制度", value: "B" },
        ],
        correct: "A",
    },
    {
        question: "（ ）是当代中国精神的集中体现：",
        choices: [
            { text: "社会主义核心价值观", value: "A" },
            { text: "中国梦", value: "B" },
        ],
        correct: "A",
    },
    {
        question: "“五年来，我们统筹推进（ ）总体布局，协调推进（ ）战略布局”：",
        choices: [
            { text: "五个全面，四位一体", value: "A" },
            { text: "五位一体，四个全面", value: "B" },
        ],
        correct: "B",
    },
    {
        question: "民族团结是我国各族人民的生命线， （ ）是民族团结之本：",
        choices: [
            { text: "从中华民族整体利益的高度想问题", value: "A" },
            { text: "中华民族共同体意识", value: "B" },
        ],
        correct: "B",
    },
    {
        question: "（ ）是社会主义民主政的本质属性，是最广泛最真实最管用的民主：",
        choices: [
            { text: "民主集中制", value: "A" },
            { text: "全过程人民民主", value: "B" },
        ],
        correct: "B",
    },
    {
        question: "我们能不能如期全面建成社会主义现代化强国，关键看（ ）：",
        choices: [
            { text: "科技自立自强", value: "A" },
            { text: "尖端科技", value: "B" },
        ],
        correct: "A",
    },
    {
        question: "（ ）是党领导人民治理国家的基本方式：",
        choices: [
            { text: "多党合作政治协商", value: "A" },
            { text: "依法治国", value: "B" },
        ],
        correct: "B",
    },
    {
        question: "总体国家安全观要以（ ）为根本：",
        choices: [
            { text: "政治安全", value: "A" },
            { text: "人民安全", value: "B" },
        ],
        correct: "A",
    },
    {
        question: "加强（ ）是全面从严治党的长远之策，根本之策：",
        choices: [
            { text: "制度建设", value: "A" },
            { text: "组织建设", value: "B" },
        ],
        correct: "A",
    },
    {
        question: "“要树牢绿水青山就是金山银山的理念，驰而不息打好（ ）三大保卫战”：",
        choices: [
            { text: "蓝天、绿水、青山", value: "A" },
            { text: "蓝天、碧水、净土", value: "B" },
        ],
        correct: "B",
    },
    {
        question: "我国经济转向高质量发展阶段的趋势性特征是增长动力由（ ）：",
        choices: [
            { text: "规模速度型粗放增长转向质量效率型集约增长", value: "A" },
            { text: "要素驱动、投资驱动转向创新驱动", value: "B" },
        ],
        correct: "B",
    },
    {
        question: "（ ）是社会主义民主政治建设的基础：",
        choices: [
            { text: "基层群众政治制度", value: "A" },
            { text: "人民代表大会制度", value: "B" },
        ],
        correct: "A",
    },
    {
        question: "（ ）是最大的民生：",
        choices: [
            { text: "教育", value: "A" },
            { text: "就业", value: "B" },
        ],
        correct: "B",
    },
    {
        question: "当前和今后一个时期，我国经济发展面临的问题，供给和需求两侧都有，但矛盾的主要方面在（ ）：",
        choices: [
            { text: "供给侧", value: "A" },
            { text: "需求侧", value: "B" },
        ],
        correct: "A",
    },
    {
        question: "习近平生态文明思想的基本内容为（ ）：",
        choices: [
            { text: "八个坚持", value: "A" },
            { text: "十个坚持", value: "B" },
        ],
        correct: "B",
    },
    {
        question: "全面依法治国是一个系统工程，其中要率先突破的是（ ）：",
        choices: [
            { text: "法治社会建设", value: "A" },
            { text: "法治政府建设", value: "B" },
        ],
        correct: "B",
    },
    {
        question: "新时代坚持和发展中国特色社会主义根本动力仍然是（ ）：",
        choices: [
            { text: "全面深化改革", value: "A" },
            { text: "全面依法治国", value: "B" },
        ],
        correct: "A",
    },
    {
        question: "（ ）是当代中国发展进步的活力之源：",
        choices: [
            { text: "中国特色社会主义制度", value: "A" },
            { text: "改革开放", value: "B" },
        ],
        correct: "B",
    },
    {
        question: "原名为“清华大学学生第十食堂”的清华校内食堂，现名为：",
        choices: [
            { text: "清芬园", value: "A" },
            { text: "听涛园", value: "B" },
        ],
        correct: "B",
    },
    {
        question: "以下哪位无产阶级革命家是清华大学校友？",
        choices: [
            { text: "姚依林", value: "A" },
            { text: "李鹏", value: "B" },
        ],
        correct: "A",
    },
    {
        question: "以下哪项清华传统不是在蒋南翔校长倡导提出的？",
        choices: [
            { text: "“双肩挑”政治辅导员制度", value: "A" },
            { text: "“从游文化”", value: "B" },
        ],
        correct: "B",
    },
    {
        question: "以下哪位名师大家担任过清华大学理学院院长？",
        choices: [
            { text: "顾毓琇", value: "A" },
            { text: "叶企孙", value: "B" },
        ],
        correct: "B",
    },
    {
        question: "1937年，哪三所大学在长沙组建国立长沙临时大学，后西迁昆明，改成国立西南联合大学？",
        choices: [
            { text: "国立清华大学、国立北京大学、私立南开大学", value: "A" },
            { text: "国立清华大学、国立北京大学、国立燕京大学", value: "B" },
        ],
        correct: "A",
    },
    {
        question: "清华大学的办学风格为：",
        choices: [
            { text: "又红又专，全面发展", value: "A" },
            { text: "中西融会、古今贯通、文理渗透", value: "B" },
        ],
        correct: "B",
    },
    {
        question: "在工字厅的历史上，它没有成为过：",
        choices: [
            { text: "知名学者的下榻场所", value: "A" },
            { text: "莘莘学子的教学场所", value: "B" },
        ],
        correct: "B",
    },
    {
        question: "清华大学的校名是毛泽东于哪一年题写的：",
        choices: [
            { text: "1949年", value: "A" },
            { text: "1950年", value: "B" },
        ],
        correct: "B",
    },
    {
        question: "五四运动之后，施滉、冀朝鼎等学生继续坚持着探求救国道路。在清华他们成立了以下哪个社团：",
        choices: [
            { text: "TMS协会", value: "A" },
            { text: "唯真学会", value: "B" },
        ],
        correct: "B",
    },
    {
        question: "哪位校长任职期间决定清华开始招收女生：",
        choices: [
            { text: "梅贻琦", value: "A" },
            { text: "罗家伦", value: "B" },
        ],
        correct: "B",
    },
    {
        question: "请问下面哪栋清华早期建筑的建成时间更早：",
        choices: [
            { text: "清华学堂", value: "A" },
            { text: "清华大学老图书馆", value: "B" },
        ],
        correct: "A",
    },
    {
        question: "清华大学特等奖学金设立于哪一年：",
        choices: [
            { text: "1999年", value: "A" },
            { text: "1989年", value: "B" },
        ],
        correct: "B",
    },
    {
        question: "1999年9月，国家表彰“两弹一星”功勋23位，其中有14位是清华校友，请问以下哪一位两弹元勋不包含在内：",
        choices: [
            { text: "王淦昌", value: "A" },
            { text: "钱骥", value: "B" },
        ],
        correct: "B",
    },
    {
        question: "“华北之大已经不能安放下一张平静的书桌”出自一二·九运动一位学生领袖之笔，他当时也是清华地下党支部书记，并在新中国成立后担任过清华大学校长，请问他是谁？",
        choices: [
            { text: "蒋南翔", value: "A" },
            { text: "冯友兰", value: "B" },
        ],
        correct: "A",
    },
    {
        question: "清华大学第一个党支部的建立时间是？",
        choices: [
            { text: "1924年", value: "A" },
            { text: "1926年", value: "B" },
        ],
        correct: "B",
    },
    {
        question: "以下对“双十协定”内容描述有误的是：",
        choices: [
            { text: "长期合作，坚决避免内战，建设独立、自由和富强的新中国，彻底实行三民主义。", value: "A" },
            { text: "迅速结束军政，实施宪政。", value: "B" },
        ],
        correct: "B",
    },
    {
        question: "以下对秋收起义介绍正确的是：",
        choices: [
            { text: "中共中央已经确立了土地革命的总方针", value: "A" },
            { text: "革命军在起义后直接转进井冈山", value: "B" },
        ],
        correct: "A",
    },
    {
        question: "1978年5月11日，（）公开发表了《实践是检验真理的唯一标准》",
        choices: [
            { text: "《人民日报》", value: "A" },
            { text: "《光明日报》", value: "B" },
        ],
        correct: "B",
    },
    {
        question: "首次邀请民主党派参与的中共全国代表大会是：",
        choices: [
            { text: "中共八大", value: "A" },
            { text: "中共九大", value: "B" },
        ],
        correct: "A",
    },
    {
        question: "1923年6月12日至20日，在广州召开的（）对国共合作的方针和方法做出了正式的决定",
        choices: [
            { text: "中共二大", value: "A" },
            { text: "中共三大", value: "B" },
        ],
        correct: "B",
    },
    {
        question: "1947年《中国土地法大纲》规定的土地分配方法是____。",
        choices: [
            { text: "按人口平均分配", value: "A" },
            { text: "按实际劳动力分配", value: "B" },
        ],
        correct: "A",
    },
    {
        question: "把邓小平理论确立为党的指导思想的是____。",
        choices: [
            { text: "党的十四大", value: "A" },
            { text: "党的十五大", value: "B" },
        ],
        correct: "B",
    },
    {
        question: "第一届全国人民代表大会选举的人大常委会委员长是____。",
        choices: [
            { text: "董必武", value: "A" },
            { text: "刘少奇", value: "B" },
        ],
        correct: "B",
    },
    {
        question: "（ ）拉开了中国新民主主义革命的帷幕",
        choices: [
            { text: "五四运动", value: "A" },
            { text: "中国共产党成立", value: "B" },
        ],
        correct: "A",
    },
    {
        question: "1949年，毛泽东提出了三条基本外交方针，不包括（ ）",
        choices: [
            { text: "另起炉灶", value: "A" },
            { text: "一致对外", value: "B" },
        ],
        correct: "B",
    },
    {
        question: "以下革命或运动获得成功的是",
        choices: [
            { text: "二次革命", value: "A" },
            { text: "护国运动", value: "B" },
        ],
        correct: "B",
    },
    {
        question: "清末新政的内容不包括：",
        choices: [
            { text: "编练“新军”", value: "A" },
            { text: "设立北大前身京师大学堂", value: "B" },
        ],
        correct: "B",
    },
    {
        question: "西方列强向世界急剧扩张、殖民主义世界体系开始形成是在____。",
        choices: [
            { text: "西方冒险家开始环球航行后", value: "A" },
            { text: "西方实现工业革命后", value: "B" },
        ],
        correct: "B",
    },
    {
        question: "第一个规定列强在华享有领事裁判权的条约是____。",
        choices: [
            { text: "《五口通商章程》", value: "A" },
            { text: "《虎门条约》", value: "B" },
        ],
        correct: "A",
    },
    {
        question: "毛泽东主持制定的中国共产党历史上第一个土地法是",
        choices: [
            { text: "《中国土地法大纲》", value: "A" },
            { text: "《井冈山土地法》", value: "B" },
        ],
        correct: "B",
    },
    {
        question: "中国抗战以来第一次大捷是（ ）",
        choices: [
            { text: "平型关大捷", value: "A" },
            { text: "台儿庄大捷", value: "B" },
        ],
        correct: "A",
    },
    {
        question: "敦促日本无条件投降的会议是",
        choices: [
            { text: "雅尔塔会议", value: "A" },
            { text: "开罗会议", value: "B" },
        ],
        correct: "B",
    },
    {
        question: "社会主义三大改造在（ ）年底基本完成",
        choices: [
            { text: "1954", value: "A" },
            { text: "1956", value: "B" },
        ],
        correct: "B",
    },
    {
        question: "朝鲜战争中国人民志愿军司令员兼政治委员是（ ）",
        choices: [
            { text: "林彪", value: "A" },
            { text: "彭德怀", value: "B" },
        ],
        correct: "B",
    },
    {
        question: "新中国外交政策成熟的标志是（ ）",
        choices: [
            { text: "提出和平共处五项原则", value: "A" },
            { text: "提出“求同存异”方针", value: "B" },
        ],
        correct: "A",
    },
    {
        question: "第一个与新中国建交的西方大国是（ ）",
        choices: [
            { text: "英国", value: "A" },
            { text: "法国", value: "B" },
        ],
        correct: "B",
    },
    {
        question: "1956年7月，我国第一批国产汽车（）牌载重汽车在长春第一汽车制造厂试制成功",
        choices: [
            { text: "红旗", value: "A" },
            { text: "解放", value: "B" },
        ],
        correct: "B",
    },
    {
        question: "第（ ）届联合国代表大会通过决议，恢复中华人民共和国在联合国中的合法席位。",
        choices: [
            { text: "25", value: "A" },
            { text: "26", value: "B" },
        ],
        correct: "B",
    },
    {
        question: "1953年6月，中共中央公布了过渡时期总路线，其主体是",
        choices: [
            { text: "实现社会主义信息化", value: "A" },
            { text: "逐步实现社会主义工业化", value: "B" },
        ],
        correct: "B",
    },
    {
        question: "中共十一届三中全会的中心议题是讨论把党的工作重点转移到（ ）上来",
        choices: [
            { text: "社会主义发展", value: "A" },
            { text: "社会主义经济建设", value: "B" },
        ],
        correct: "B",
    },
    {
        question: "1978年12月，18户农民秘密签订契约，决定将集体耕地承包到户，搞大包干的地方是",
        choices: [
            { text: "安徽凤阳小岗村", value: "A" },
            { text: "山西昔阳大寨村", value: "B" },
        ],
        correct: "A",
    },
    {
        question: "下列论断属于邓小平同志在1992年“南方谈话”时提出的是（ ）",
        choices: [
            { text: "中国要警惕右，但主要是防止“左”", value: "A" },
            { text: "社会主义也可以搞市场经济", value: "B" },
        ],
        correct: "A",
    },
    {
        question: "（ ）是现阶段我国经济发展和经济工作的主线。",
        choices: [
            { text: "转变经济发展方式", value: "A" },
            { text: "推进供给侧结构性改革", value: "B" },
        ],
        correct: "B",
    },
    {
        question: "中共十三大明确将党在社会主义初级阶段的基本路线概括为（ ）",
        choices: [
            { text: "“一个中心，两个基本点”", value: "A" },
            { text: "“四个坚持”", value: "B" },
        ],
        correct: "A",
    },
    {
        question: "1992年，“南方谈话”，邓小平同志提出怎样的经济发展思想",
        choices: [
            { text: "科学技术是第一生产力", value: "A" },
            { text: "发展才是硬道理", value: "B" },
        ],
        correct: "B",
    },
    {
        question: "1941年3月，在重庆成立的民主党派是",
        choices: [
            { text: "中国民主政团同盟", value: "A" },
            { text: "中国青年党", value: "B" },
        ],
        correct: "A",
    },
    {
        question: "我国第一颗原子弹爆炸成功的时间是（ ）",
        choices: [
            { text: "1964/10/1", value: "A" },
            { text: "1962/10/1", value: "B" },
        ],
        correct: "A",
    },
    {
        question: "“三个代表”重要思想的本质是（ ）。",
        choices: [
            { text: "实事求是", value: "A" },
            { text: "立党为公，执政为民", value: "B" },
        ],
        correct: "B",
    }
];
