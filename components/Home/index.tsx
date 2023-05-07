import { useUserSession } from '@/store/user'
import { Button, Container, Typography, useMediaQuery, useTheme } from '@mui/material'

export default function Home () {
  const logout = useUserSession(state => state.logout)
  const userInfo = useUserSession(state => state.userInfo)
  console.log(userInfo)
  const theme = useTheme()
  const xlScreen = useMediaQuery(theme.breakpoints.up('xl'))
  return (
    <>
      <Container maxWidth={xlScreen ? 'lg' : 'md'}>
        <Typography variant='h3'>
          ¡BIENVENIDO AL BUEN SABOR!
        </Typography>
        <Typography>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium eveniet, quos debitis voluptas architecto, fuga non consectetur doloribus, nesciunt officiis ipsa corrupti consequatur temporibus praesentium! Inventore commodi quo vero tempore, recusandae vitae nemo aspernatur quod perferendis mollitia itaque voluptatem rem, sit ad exercitationem est unde id pariatur debitis magnam officiis fuga placeat. Soluta iste voluptate ipsam quia expedita doloremque tenetur similique commodi nobis repellendus dolor voluptatem, deserunt eaque neque impedit optio quibusdam consectetur tempora rem dolorum temporibus fugiat ex. Temporibus quaerat consectetur explicabo cumque adipisci ratione, aut eligendi velit culpa minima sequi sunt architecto, quod voluptas ullam minus. Perferendis quos velit vero odit commodi soluta culpa modi earum similique! Perferendis dolor quis modi delectus molestiae dolore minus mollitia, quod nobis, aliquam ipsum, enim nemo asperiores reiciendis. Numquam nostrum harum voluptas, aliquam iste eaque quis dolor esse vero nihil autem sapiente non qui cupiditate, expedita quasi? Soluta earum sint minima vitae, possimus hic quae laboriosam minus sed quisquam, magnam eligendi necessitatibus. Repellat fuga, sint praesentium ducimus quos ab iusto quibusdam? Mollitia cum, quasi consequatur necessitatibus iure rerum maiores eius porro tenetur aut harum accusantium omnis earum nobis suscipit officiis quidem reprehenderit cumque vero facilis quis? Molestias facilis pariatur numquam praesentium vitae vel excepturi aspernatur sit cupiditate sapiente soluta architecto dolorum odit quam, beatae magni officiis mollitia autem. Ad expedita fuga ullam ex eligendi aliquid quisquam, ipsum, itaque id dolor deleniti cumque ut consectetur labore inventore nihil! Facilis eius dolore tempore ad nulla doloremque culpa qui sint quidem aut asperiores, expedita in voluptate repellendus ipsam. Quibusdam doloribus quia eos quo nisi at labore itaque ratione eum, minima est, fuga dolores, dolorem corporis explicabo similique cum autem iusto optio qui asperiores. Eum nulla voluptate autem ad commodi maiores quas quos aliquam omnis doloribus sapiente harum recusandae, vel magnam quidem fugit perferendis deleniti fugiat. Molestias quaerat ut quidem, nostrum tenetur necessitatibus adipisci optio dicta dolore aperiam odio, ad blanditiis itaque reiciendis quis reprehenderit, at consectetur laudantium. Voluptatem et voluptates facere quasi maiores in dolorum consequatur porro possimus, odio ex magni quo officia asperiores explicabo ea aliquid praesentium reiciendis vitae quidem rerum? Dolore, delectus omnis. Magnam, et minus architecto deserunt totam culpa nesciunt. Recusandae eius suscipit, dolor alias nam consectetur, exercitationem ad voluptates quas omnis optio totam necessitatibus ea, est ratione asperiores velit odit iusto! Qui ipsum omnis laboriosam voluptatem magni, adipisci quae quasi, quaerat esse neque et rem dicta! Mollitia commodi ducimus soluta explicabo! Molestiae necessitatibus quae, doloremque aut a vero cum! Nostrum necessitatibus minus ratione omnis corporis quis, corrupti nihil obcaecati nobis hic recusandae reiciendis! A est modi similique reiciendis praesentium impedit sunt maxime nam eius illum repellendus nihil fugiat ipsam soluta, voluptatum placeat eum laborum minima rerum voluptatem excepturi repellat aperiam perspiciatis. Praesentium dolorum, temporibus optio labore obcaecati laborum cumque ut quae saepe autem. Quae aperiam, sapiente fugit mollitia dignissimos eaque ad error unde, iusto aliquid at sint eos aliquam doloribus cupiditate culpa nostrum pariatur, iste accusantium consectetur labore. Provident quisquam velit ratione ab veritatis maiores, sequi esse quos, ipsum nostrum quidem sint voluptatibus id. Amet ratione quo eaque veritatis minus, expedita vitae magnam alias non et numquam dignissimos molestiae impedit reiciendis ullam id modi fugit cum autem est rerum error tenetur fuga! Architecto alias magni perferendis labore enim quia quae facere eos velit necessitatibus praesentium quibusdam nostrum voluptate corporis, mollitia molestias cumque illum rerum deleniti ullam doloribus ratione. Consectetur molestiae magni sint veritatis vel, totam assumenda est, aliquid, quo adipisci nulla optio quae sit. Iste harum dicta fuga delectus fugiat ex, vero, quibusdam sapiente dolor cupiditate, quaerat hic maxime? Id nostrum, placeat vero impedit est labore autem ut dolor facere pariatur. Excepturi sint consequuntur libero, laboriosam corporis perspiciatis porro, inventore minus reprehenderit quibusdam deleniti aliquid natus exercitationem aut nihil saepe. Distinctio velit ullam fugiat! Suscipit quaerat facilis praesentium voluptas temporibus amet quae quod ducimus quidem recusandae quam pariatur possimus maiores reprehenderit obcaecati eius sed impedit, ab ex? Aliquid iure, ipsum laboriosam itaque repellat odio cupiditate eveniet dicta aliquam error inventore numquam. Dicta sint cumque tenetur porro amet alias eveniet deserunt maxime officia perspiciatis, aliquid velit quisquam quidem magnam veniam quod reprehenderit voluptates distinctio reiciendis itaque corrupti culpa! Ad nulla ut, in et aspernatur deserunt possimus, accusantium suscipit eveniet soluta, est similique error aut repudiandae ab eos? Doloremque beatae aliquam tempore nihil, laboriosam atque reprehenderit ratione dolorum aliquid iste a! Tempora eos, sit quisquam recusandae natus quasi quidem ea dignissimos, assumenda cum deserunt ducimus nihil nesciunt repudiandae maiores officia aliquam reprehenderit perspiciatis illo necessitatibus quae odit incidunt! Ducimus, porro rerum quasi, facere doloremque, repellendus asperiores molestias corrupti officiis natus repellat assumenda modi dolor delectus quisquam quidem consequatur ratione fugit hic neque ad unde atque. Culpa ad distinctio praesentium suscipit rem provident eveniet nemo nulla consequuntur? Autem suscipit consequuntur quidem aspernatur magni aliquid excepturi architecto rerum est. Veritatis, sed tenetur aut repellat voluptatem atque non voluptate incidunt aspernatur vitae deserunt at commodi, praesentium quisquam maxime cumque pariatur saepe assumenda animi accusamus nesciunt placeat consequatur mollitia recusandae? Quae adipisci eos velit ipsa minus. Impedit accusantium, laborum ipsam voluptatibus illum dignissimos, rem nam quidem pariatur vel omnis ex maiores, ducimus iusto? Suscipit ad rem ratione laborum delectus sunt, enim non, accusantium impedit eum expedita itaque incidunt? Culpa recusandae veniam rerum nulla laborum ipsam architecto, consequatur, vel beatae esse accusantium vitae, asperiores tenetur distinctio sunt pariatur minima officia numquam nemo totam! Incidunt eum illum reprehenderit, fugiat officia voluptate nulla molestiae culpa quis ab amet sed quibusdam at. Ut, veniam, ducimus voluptatum at autem voluptates doloribus, corporis cum facere laudantium amet delectus unde repellat labore exercitationem expedita sequi commodi nesciunt consequuntur atque! Hic voluptatum placeat sunt similique maiores architecto quidem blanditiis reiciendis alias nostrum illum, dolorem culpa quas recusandae, maxime nemo reprehenderit aliquam ipsam? Aperiam cum aut, a vitae quam hic aliquid quas deleniti, enim temporibus fugit earum quis nihil error maxime ipsa distinctio, velit optio dolorum quia iusto sit est eaque modi! Vitae, ducimus iure unde soluta placeat cupiditate excepturi impedit pariatur! Deleniti reprehenderit dignissimos praesentium obcaecati ipsam at quidem, consectetur fuga commodi sint atque voluptatum eveniet excepturi? Perspiciatis quas consequuntur nemo dolorem optio dolorum eveniet, distinctio labore quo sequi expedita laborum voluptatem porro rerum voluptas eos? Laboriosam, vitae reprehenderit molestiae fugiat enim ratione velit tenetur iste hic, ipsa assumenda asperiores, corrupti odio blanditiis deleniti veniam error. Quam soluta exercitationem ratione sit atque modi placeat deserunt impedit doloremque ea aut necessitatibus, nam nobis eaque, fugiat est accusamus officiis sint eos neque. Excepturi itaque asperiores ullam illo odit delectus molestiae fuga, aliquam eum cum maiores impedit fugit explicabo deleniti. Perferendis maxime quo aperiam corporis temporibus quas tempore voluptatibus suscipit cupiditate voluptates explicabo aliquid, recusandae laboriosam ullam facere voluptate numquam rerum rem pariatur dignissimos totam quos atque harum dolorem. Est illo reprehenderit blanditiis, ex dolores quis dolore voluptas eveniet nobis vitae commodi? Officiis ea perferendis corrupti nemo nihil modi fugiat ducimus hic sed, enim minima tempora amet provident, iure autem quam facilis quos nostrum molestias, in delectus. Iusto tenetur commodi saepe in dolore, iste fuga veritatis ad optio nobis earum magni ab, provident, aperiam maiores error nam quasi totam facilis consequatur corrupti! Sequi dolorum ipsum sint non repellat illo unde, expedita aliquid quia! Sapiente nam eligendi, vel a iste dolor libero cumque eius ut corrupti nemo distinctio blanditiis alias rem pariatur nisi temporibus quod delectus, velit natus itaque! Quasi molestias dolorem earum commodi corporis ea architecto dicta ducimus eos. Officia quam debitis quod reprehenderit distinctio tempore at odit quos qui provident error perspiciatis ratione maxime sed eveniet repudiandae, cumque animi nisi? Consequatur aut nisi natus culpa, aliquam animi aperiam ullam magni, perspiciatis corporis cum mollitia quod beatae, esse placeat architecto assumenda ratione quas similique? Placeat officiis ex esse voluptas beatae perferendis fuga minus quia quos nam illum eaque id accusamus sit, unde, aperiam omnis fugiat odio repudiandae provident officia. Sit maiores, natus iusto velit voluptate facere ex, reprehenderit adipisci unde ea, alias dolorem vero aliquid. Maxime, eveniet? Tenetur odio soluta autem eaque quos amet obcaecati ex dicta, id quod dolor itaque dolores ad est non optio molestiae error blanditiis deleniti voluptatibus! Labore, error maxime? Ex iure ratione ducimus nobis laudantium officia, quaerat voluptas aut cum, vel enim minima voluptates quis est iste. Quidem in perspiciatis odit ratione. Quis iure molestiae, harum amet neque possimus sapiente ab doloremque quisquam fugiat nam, aspernatur ipsum? Nisi porro inventore harum dolor! A ab, vitae amet optio eum aliquam deserunt recusandae repudiandae impedit. Amet consectetur in adipisci nesciunt? Commodi saepe error, voluptatibus deserunt quasi mollitia ducimus sed? Quos quisquam reiciendis facilis. Quis tenetur expedita modi, nemo quae quisquam aliquam molestiae reprehenderit officia esse delectus, atque voluptates sit ipsa quibusdam? Deleniti, quae nihil facilis pariatur suscipit molestias possimus, inventore blanditiis aut tenetur recusandae exercitationem iste numquam labore officiis, aspernatur ipsum! Laborum accusamus explicabo culpa, praesentium recusandae earum quisquam. Aut eaque dolorum minima enim possimus. Voluptates fugiat harum dolores voluptatibus earum reprehenderit amet vel, doloremque nemo, natus, laborum minima corrupti eius consequuntur quaerat cum nihil culpa error rem architecto perspiciatis. Deserunt perspiciatis ab corrupti omnis in quos eligendi, nam dolor ea molestias enim tempora hic laudantium ducimus ullam reprehenderit quae voluptatibus cupiditate consequuntur cum delectus quia? Illum perferendis ullam rem consequuntur saepe rerum, nobis quibusdam molestiae blanditiis dignissimos nisi eum sapiente molestias, laborum provident deleniti dolorem nihil incidunt. Quam, alias. Voluptatem hic vel esse eos id veritatis? Adipisci, fuga magni dolorum ea incidunt tempora ipsa, ipsum debitis officia commodi tempore iure eos natus ullam nesciunt laborum saepe possimus unde. Illum maxime error, aperiam blanditiis eaque reprehenderit laborum, minima facilis nesciunt architecto id doloremque aliquid doloribus hic placeat! Aspernatur quia, officiis similique corporis ullam officia qui, saepe veritatis distinctio rerum possimus consequatur soluta necessitatibus, asperiores rem libero tempore repudiandae illo. Pariatur veritatis magni molestiae, maxime officiis voluptatibus provident vel, blanditiis explicabo architecto doloremque modi ipsam dolore repudiandae numquam delectus! Eum illo aspernatur voluptatum facilis, odit eligendi dolores sit corrupti repellendus ea assumenda distinctio nisi perferendis eveniet, deleniti architecto quos? Quisquam, consequatur? Corporis voluptatum velit asperiores eos atque corrupti, tempore porro deserunt laboriosam fuga iusto natus molestiae explicabo quidem illo nam culpa neque perspiciatis pariatur consectetur omnis voluptas reprehenderit. Autem veniam dolor nam itaque blanditiis, ex nobis eveniet dicta nulla nisi sequi animi magni porro sit, esse velit sint necessitatibus beatae unde obcaecati repudiandae at? Officia, enim. Fuga minima a quisquam neque similique reprehenderit perspiciatis, cum est eligendi quod hic sapiente deleniti nemo nostrum atque laboriosam ad in reiciendis laborum recusandae adipisci aliquid! Tenetur doloribus optio, rerum odio eos cumque fugiat iusto vel molestias porro ratione, amet assumenda eius illo ex voluptate. Inventore quod atque repellendus recusandae, quia totam facere velit aut temporibus animi, distinctio a placeat. Placeat et esse optio sit sunt, dolorem perferendis! Vel sint ea aut quia, officiis illum, animi illo error a officia doloremque libero accusantium pariatur alias totam maxime consequatur laboriosam quasi aspernatur ipsa itaque repellat tempora assumenda laborum. Unde repellat alias placeat odio laudantium rerum minima recusandae quo modi quasi vel, voluptas impedit fugit commodi sapiente, maxime, deserunt enim. Blanditiis, in repellendus, soluta aspernatur sapiente saepe placeat error eaque eum quisquam ut, accusamus numquam voluptatem vitae. Ipsam placeat, sed necessitatibus odio quos animi culpa soluta inventore optio velit consectetur aliquid eos itaque dolorum amet magni enim neque voluptatibus, nemo porro harum. Beatae, ex reiciendis. Velit itaque vero consectetur laboriosam numquam debitis, rerum atque molestiae accusamus aliquam repellat neque pariatur modi distinctio dignissimos laborum iste eveniet! Dignissimos impedit facere et error facilis asperiores provident voluptas dolorum quibusdam, ullam, explicabo nobis? Corporis nemo ipsum animi provident, voluptate neque. Eaque cupiditate non cum iure deleniti, delectus similique ab, voluptatibus inventore dignissimos atque nemo modi necessitatibus quia vitae quam amet ipsa? Est in porro praesentium, ipsum officiis voluptatem nam reiciendis eius vitae velit. Explicabo quibusdam veniam laborum iure soluta ad! Architecto, distinctio. Expedita distinctio, vitae hic quod doloribus sequi? Fugiat cum modi inventore voluptatum, placeat illo dolorum et officia similique expedita doloribus facilis ullam aliquid nisi voluptatibus consequuntur maxime asperiores eligendi eius aut incidunt nam odio amet? Ipsum asperiores, voluptatum ab recusandae eveniet cum exercitationem inventore expedita libero eos laborum harum illo velit molestias dicta.
        </Typography>
        <Button onClick={logout}>
          Cerrar Sesión
        </Button>
        <Button onClick={logout}>
          Admin
        </Button>
      </Container>
    </>
  )
}
