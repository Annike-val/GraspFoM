# GraspFoM
GraspFoM: Towards Reconstruction-Driven Robotic Grasping with 3D Foundation Priors

Dongli Wu<sup>1</sup>, Xiaobao Wei<sup>2</sup>, Hao Wang<sup>2</sup>, Qiaochu Dong<sup>2</sup>, Ying Li<sup>2,3</sup>, Qingpo Wuwu<sup>2</sup>, Ming Lu<sup>2</sup>, Wufan Zhao<sup>1</sup>

<sup>1</sup>The Hong Kong University of Science and Technology (Guangzhou)  
<sup>2</sup>Peking University  
<sup>3</sup>The Hong Kong University of Science and Technology

<p align="center">
  <a href="https://annike-val.github.io/GraspFoM/"><img src="https://img.shields.io/badge/Project-Website-blue"></a>
  <a href="https://annike-val.github.io/GraspFoM/static/papers/graspfom.pdf"><img src="https://img.shields.io/static/v1?label=Paper&message=PDF&color=red&logo=adobeacrobatreader"></a>
  <a href="https://annike-val.github.io/GraspFoM/#citation"><img src="https://img.shields.io/badge/Citation-BibTeX-green"></a>
</p>

## Abstract
Robotic grasping is a fundamental capability in robotic manipulation. Yet grasping remains challenging under partial observations. Reliable grasping depends on both local contact cues and object-level 3D structure. Existing geometry-aware grasping methods recognize the value of reconstruction, but they typically treat geometry as an intermediate prediction rather than a reusable object prior for grasping. In this paper, we present GraspFoM, a unified framework that leverages 3D foundation priors (SAM3D) to build a shared 3D object latent for both reconstruction and grasp pose prediction. Built on this shared object latent, we introduce an anchor-initialized truncated pose-reasoning diffuser that predicts continuous and multimodal grasp poses without directly relying on discrete grasp candidates. We further investigate the interaction between reconstruction and grasping through a reconstruction-aware scorer and a residual latent updater. Reconstruction provides grounded geometric cues, while grasp supervision refines the shared object latent toward grasp-relevant affordances. GraspFoM jointly predicts grasp poses and reconstructs high-fidelity 3D assets in mesh and 3DGS forms. Comprehensive experiments demonstrate that GraspFoM achieves state-of-the-art results on both reconstruction and grasping. Notably, these improvements require only a small number of additional trainable parameters. Component-wise ablation studies also demonstrate the contribution of each component. Codes will be released.

![Overview of GraspFoM](teaser/grasp_pipe.png)

Figure: Overview of GraspFoM. (a) During training, we first fuse a shared shape latent. Based on these latents, the pose-reasoning diffuser predicts grasp poses and further refines the latents. (b) During inference, GraspFoM performs anchor-based denoising, score-based selection, and returns the top-ranked grasp poses together with high-fidelity 3D object assets.

## Project Page

The public project page is available at:

https://annike-val.github.io/GraspFoM/

## Citation

```bibtex
@misc{graspfom2026,
  title={GraspFoM: Towards Reconstruction-Driven Robotic Grasping with 3D Foundation Priors},
  year={2026},
  note={Project page}
}
```
