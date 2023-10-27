import Layout from '../layouts/Layout.astro';
import Grow from '../components/grow.astro';
import Content from '../components/content.astro';
import HeroImage from '../components/HeroImage.astro';

<Fragment>
const data = [
{subtitle}: 'Digital Product',
title: 'Awwards',
bg: 'whitesmoke',
color: '#120902',
  },
{subtitle}: 'Digital Product',
title: 'Creative Direction',
description: 'Creative direction is like embarking on a journey through a land of endless possibilities, where only the final stretch is visible.',
bg: '#dbd4ca',
color: '#120902',
  },
{subtitle}: 'Digital Product',
title: 'Experience',
description: 'Over twelve years in the creative industry, I have had the pleasure of working on many great projects.',
bg: '#972d07',
color: '#fff',
  },
{subtitle}: 'Digital Product',
title: 'Awwards Green',
bg: '#656d4a',
color: '#fff',
  },
{subtitle}: 'Digital Product',
title: 'Awwards Gray',
bg: '#ced4da',
color: '#120902',
  },
{subtitle}: 'Digital Product',
title: 'Awwards Gold',
bg: '#DAAA00',
color: '#120902',
  },
];



<Layout title="Repliba site">
<div class="_wrapper">
<Grow />
<HeroImage />
{data.map((item) => (
<Fragment><Content subTitle={item.subtitle} title={item.title} bg={item.bg} color={item.color} /></Fragment>
))}
</div>
</Layout>

</Fragment>;
