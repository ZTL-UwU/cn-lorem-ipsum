<template>
  <Toaster position="bottom-left" />
  <div class="grid h-screen w-full">
    <div class="flex flex-col">
      <header class="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4">
        <div class="pr-2">
          <Button variant="outline" size="icon">
            <Languages class="size-5" />
          </Button>
        </div>
        <h1 class="text-xl font-semibold">
          cn-lorem-ipsum
          <span class="hidden md:inline">
            中文假文&人名生成器
          </span>
        </h1>
        <div class="ml-auto gap-1.5 text-sm flex">
          <DarkModeTrigger />
          <a href="https://github.com/ZTL-UwU/cn-lorem-ipsum">
            <Button variant="outline" size="sm">
              <Github class="h-4 w-4" />
            </Button>
          </a>
        </div>
      </header>

      <main class="grid flex-1 gap-4 overflow-auto max-w-screen p-4 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <Tabs v-model="mode" default-value="article">
            <TabsList class="grid w-full grid-cols-5">
              <TabsTrigger value="article">文章</TabsTrigger>
              <TabsTrigger value="name">人名</TabsTrigger>
              <TabsTrigger value="paragraph">段落</TabsTrigger>
              <TabsTrigger value="sentence">句子</TabsTrigger>
              <TabsTrigger value="phrase">语句</TabsTrigger>
            </TabsList>
          </Tabs>
          <Card class="mt-3">
            <CardHeader>
              <CardTitle>
                生成选项
              </CardTitle>
              <CardDescription>
                长度留空时按 Min ~ Max 随机生成长度
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div class="grid gap-3">
                  <div class="grid gap-3">
                    <Label for="temperature">长度</Label>
                    <Input id="temperature" type="number" v-model="len" />
                  </div>
                  <div class="grid grid-cols-2 gap-4" v-if="mode !== 'name'">
                    <div class="grid gap-3">
                      <Label for="min">Min</Label>
                      <Input id="min" type="number" v-model="min" />
                    </div>
                    <div class="grid gap-3">
                      <Label for="max">Max</Label>
                      <Input id="max" type="number" v-model="max" />
                    </div>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
          <Card class="mt-4 relative">
            <Button variant="outline" size="icon" @click="copyCode(code); toast.success('复制成功')"
              class="absolute top-2 right-2">
              <Copy class="w-4 h-4" />
            </Button>
            <div v-html="codeHtml" class="p-4 max-w-[calc(100vw-6rem)] w-[calc(100%-4rem)] overflow-x-auto" />
          </Card>
        </div>
        <div
          class="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-6 lg:col-span-2 border shadow-sm">
          <div class="flex absolute top-4 left-5 gap-2">
            <Button variant="outline" size="icon" @click="refreshKey += 1">
              <RefreshCcw class="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon" @click="copyText(generatedLorem); toast.success('复制成功', {
              description: `长度：${generatedLorem.length}`,
            })">
              <Copy class="w-4 h-4" />
            </Button>
          </div>
          <div class="absolute right-5 top-5 flex gap-1">
            <Badge variant="outline">{{ timeSpent === 0 ? '&lt;1' : timeSpent }}ms</Badge>
            <Badge variant="outline">{{ generatedLorem.length }}字</Badge>
          </div>
          <div class="flex-1 pt-10 whitespace-pre-line leading-relaxed">
            {{ generatedLorem }}
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Copy, Github, Languages, RefreshCcw } from 'lucide-vue-next';
import { toast } from 'vue-sonner';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Toaster } from '@/components/ui/sonner';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { useClipboard } from '@vueuse/core';
import cnLorem from 'cn-lorem-ipsum';
import {
  getHighlighter,
  type BundledLanguage,
  type BundledTheme,
  type HighlighterGeneric,
} from 'shiki';
import { computed, onMounted, ref, watch } from 'vue';

import DarkModeTrigger from '@/components/DarkModeTrigger.vue';
import { useColorMode } from '@vueuse/core';

const mode = ref<'article' | 'name' | 'paragraph' | 'sentence' | 'phrase'>(
  'article',
);
const colorMode = useColorMode();

const len = ref();
const min = ref();
const max = ref();
const refreshKey = ref(0);
const timeSpent = ref(0);

watch(mode, () => {
  len.value = undefined;
  min.value = undefined;
  max.value = undefined;
});

const generatedLorem = computed(() => {
  if (refreshKey.value) console.log('refreshed');
  const option = {
    len: len.value || undefined,
    min: min.value,
    max: max.value,
  };

  let res = '';
  const begin = Date.now();
  if (mode.value === 'article') res = cnLorem.article(option);
  else if (mode.value === 'name') res = cnLorem.name({ len: len.value });
  else if (mode.value === 'paragraph') res = cnLorem.paragraph(option);
  else if (mode.value === 'sentence') res = cnLorem.sentence(option);
  else if (mode.value === 'phrase') res = cnLorem.phrase(option);
  const end = Date.now();

  timeSpent.value = end - begin;
  return res;
});
const { copy: copyText } = useClipboard({ source: generatedLorem });

const code = ref();
const codeHtml = ref();
const { copy: copyCode } = useClipboard({ source: code });

function getCode() {
  const config: string[] = [];
  if (len.value) config.push(`len: ${len.value}`);
  if (min.value) config.push(`min: ${min.value}`);
  if (max.value) config.push(`max: ${max.value}`);

  const str = config.length ? `{ ${config.join(', ')} }` : '';
  return `import cnLorem from 'cn-lorem-ipsum';\n\ncnLorem.${mode.value}(${str});`;
}

async function getShiki(
  highlighter: HighlighterGeneric<BundledLanguage, BundledTheme>,
) {
  code.value = getCode();
  codeHtml.value = highlighter.codeToHtml(code.value, {
    lang: 'typescript',
    theme: colorMode.value === 'light' ? 'min-light' : 'github-dark',
  });
}

let highlighter: HighlighterGeneric<BundledLanguage, BundledTheme>;

watch([colorMode, mode, len, min, max, refreshKey], () =>
  getShiki(highlighter),
);
onMounted(async () => {
  highlighter = await getHighlighter({
    themes: [colorMode.value === 'light' ? 'min-light' : 'github-dark'],
    langs: ['typescript'],
  });

  await getShiki(highlighter);
});
</script>

<style>
.shiki {
  background-color: transparent !important;
}
</style>